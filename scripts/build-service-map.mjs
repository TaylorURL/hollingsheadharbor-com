/**
 * Draws src/data/service-map.json: the land and the six service states as
 * SVG paths on the 320x200 plate every ArtPlate is set on, and the harbors
 * from src/data/harbors.json projected onto the same plate.
 *
 * The outlines come from us-atlas, which is the Census Bureau's cartographic
 * boundary file, so they are public domain and nothing here is traced from a
 * map somebody owns. The atlas is fetched when this runs and not kept: the
 * output is small and checked in, and this script is how it is regenerated
 * when a harbor is added or the framing moves.
 *
 *   node scripts/build-service-map.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const ATLAS = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
const HARBORS_FILE = new URL('../src/data/harbors.json', import.meta.url);
const OUT = new URL('../src/data/service-map.json', import.meta.url);

const W = 320;
const H = 200;

// The window onto the map. Longitude from the middle of Texas to the
// Carolina coast, latitude from the Florida peninsula to the top of the
// Michigan mitten, so every harbor sits inside with the water that reaches
// it: the Gulf, the Tennessee and Cumberland, and the lower Great Lakes. The
// span is set so the frame comes out at the plate's own 8:5.
const LON = [-104.6, -73.4];
const LAT = [27.4, 43.2];

// Plate carree with the longitude scale corrected at the middle latitude, so
// the region is not stretched sideways. At this size a true conic projection
// would move nothing by more than a pixel.
const MID = (LAT[0] + LAT[1]) / 2;
const SX = W / (LON[1] - LON[0]);
const SY = SX / Math.cos((MID * Math.PI) / 180);
const project = ([lon, lat]) => [(lon - LON[0]) * SX, (LAT[1] - lat) * SY];

// The clip is a little wider than the plate so a coastline that leaves the
// frame does so under the plate's own clip rather than at a visible edge.
const BLEED = 6;
const CLIP = [-BLEED, -BLEED, W + BLEED, H + BLEED];

// Anything under this many pixels of detail is thrown away. The plate is 320
// wide; a coastline drawn finer than half a pixel is data the reader cannot
// see and the bundle still has to carry.
const TOLERANCE = 0.5;

const STATES = { AL: 'Alabama', FL: 'Florida', MI: 'Michigan', OH: 'Ohio', TN: 'Tennessee', TX: 'Texas' };

const topo = await (await fetch(ATLAS)).json();
const { scale, translate } = topo.transform;
const arcs = topo.arcs.map((arc) => {
  let x = 0;
  let y = 0;
  return arc.map(([dx, dy]) => {
    x += dx;
    y += dy;
    return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
  });
});

function ring(indices) {
  const points = [];
  for (const index of indices) {
    const arc = index < 0 ? arcs[~index].slice().reverse() : arcs[index];
    for (const point of arc) {
      const last = points[points.length - 1];
      if (last && last[0] === point[0] && last[1] === point[1]) continue;
      points.push(point);
    }
  }
  return points;
}

function polygonsOf(geometry) {
  if (geometry.type === 'Polygon') return [geometry.arcs];
  if (geometry.type === 'MultiPolygon') return geometry.arcs;
  return [];
}

// Sutherland-Hodgman against the clip rectangle, one edge at a time.
function clip(points) {
  const [x0, y0, x1, y1] = CLIP;
  const edges = [
    [(p) => p[0] >= x0, (a, b) => intersect(a, b, 0, x0)],
    [(p) => p[0] <= x1, (a, b) => intersect(a, b, 0, x1)],
    [(p) => p[1] >= y0, (a, b) => intersect(a, b, 1, y0)],
    [(p) => p[1] <= y1, (a, b) => intersect(a, b, 1, y1)],
  ];
  let output = points;
  for (const [inside, cross] of edges) {
    const input = output;
    output = [];
    if (!input.length) break;
    let prev = input[input.length - 1];
    for (const current of input) {
      if (inside(current)) {
        if (!inside(prev)) output.push(cross(prev, current));
        output.push(current);
      } else if (inside(prev)) {
        output.push(cross(prev, current));
      }
      prev = current;
    }
  }
  return output;
}

function intersect(a, b, axis, value) {
  const t = (value - a[axis]) / (b[axis] - a[axis]);
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

// Ramer-Douglas-Peucker on a closed ring.
function simplify(points, tolerance) {
  if (points.length < 4) return points;
  const keep = new Array(points.length).fill(false);
  keep[0] = true;
  keep[points.length - 1] = true;
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [start, end] = stack.pop();
    let farthest = -1;
    let distance = tolerance;
    for (let i = start + 1; i < end; i += 1) {
      const d = perpendicular(points[i], points[start], points[end]);
      if (d > distance) {
        distance = d;
        farthest = i;
      }
    }
    if (farthest !== -1) {
      keep[farthest] = true;
      stack.push([start, farthest], [farthest, end]);
    }
  }
  return points.filter((_, i) => keep[i]);
}

function perpendicular(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const length = Math.hypot(dx, dy);
  if (length === 0) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  return Math.abs(dy * p[0] - dx * p[1] + b[0] * a[1] - b[1] * a[0]) / length;
}

const fixed = (n) => String(Math.round(n * 10) / 10);

// An open line clipped to the rectangle: the runs that stay inside, with the
// crossing point added where a run leaves or enters.
function clipLine(points) {
  const [x0, y0, x1, y1] = CLIP;
  const inside = (p) => p[0] >= x0 && p[0] <= x1 && p[1] >= y0 && p[1] <= y1;
  const cross = (a, b) => {
    let out = [a, b];
    for (const [axis, value, keep] of [[0, x0, (p) => p[0] >= x0], [0, x1, (p) => p[0] <= x1], [1, y0, (p) => p[1] >= y0], [1, y1, (p) => p[1] <= y1]]) {
      const [p, q] = out;
      if (keep(p) === keep(q)) continue;
      const hit = intersect(p, q, axis, value);
      out = keep(p) ? [p, hit] : [hit, q];
    }
    return out;
  };
  const runs = [];
  let run = [];
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    const prev = points[i - 1];
    if (inside(point)) {
      if (prev && !inside(prev)) run.push(cross(prev, point)[0]);
      run.push(point);
    } else if (prev && inside(prev)) {
      run.push(cross(prev, point)[1]);
      runs.push(run);
      run = [];
    }
  }
  if (run.length) runs.push(run);
  return runs;
}

// Every border of the service states drawn once. A state's own ring carries
// the border it shares with its neighbour, so stroking each state doubles
// the shared lines; the arcs are shared in the topology, and taking each one
// once gives a line of one weight everywhere.
function meshOf(geometries) {
  const seen = new Set();
  const parts = [];
  for (const geometry of geometries) {
    for (const polygon of polygonsOf(geometry)) {
      for (const indices of polygon) {
        for (const index of indices) {
          const id = index < 0 ? ~index : index;
          if (seen.has(id)) continue;
          seen.add(id);
          for (const run of clipLine(arcs[id].map(project))) {
            const points = simplify(run, TOLERANCE);
            if (points.length < 2) continue;
            parts.push(`M${points.map(([x, y]) => `${fixed(x)} ${fixed(y)}`).join('L')}`);
          }
        }
      }
    }
  }
  return parts.join('');
}

function pathOf(geometry) {
  const parts = [];
  for (const polygon of polygonsOf(geometry)) {
    for (const indices of polygon) {
      const points = simplify(clip(ring(indices).map(project)), TOLERANCE);
      if (points.length < 3) continue;
      parts.push(`M${points.map(([x, y]) => `${fixed(x)} ${fixed(y)}`).join('L')}Z`);
    }
  }
  return parts.join('');
}

const nation = topo.objects.nation.geometries[0];
const states = topo.objects.states.geometries;

const land = pathOf(nation);
const serviceGeometries = Object.entries(STATES).map(([code, name]) => {
  const geometry = states.find((g) => g.properties.name === name);
  if (!geometry) throw new Error(`no outline for ${name}`);
  return { code, geometry };
});
const service = serviceGeometries.map(({ code, geometry }) => ({ code, path: pathOf(geometry) }));
const borders = meshOf(serviceGeometries.map(({ geometry }) => geometry));

const harbors = JSON.parse(readFileSync(HARBORS_FILE, 'utf8')).map((harbor) => {
  const [x, y] = project([harbor.lon, harbor.lat]);
  return { name: harbor.name, state: harbor.state, x: Number(fixed(x)), y: Number(fixed(y)) };
});

for (const harbor of harbors) {
  if (harbor.x < 0 || harbor.x > W || harbor.y < 0 || harbor.y > H) {
    throw new Error(`${harbor.name} falls outside the plate at ${harbor.x},${harbor.y}`);
  }
}

writeFileSync(OUT, `${JSON.stringify({ viewBox: `0 0 ${W} ${H}`, land, states: service, borders, harbors }, null, 2)}\n`);
console.log(`land ${land.length} chars, states ${service.map((s) => `${s.code} ${s.path.length}`).join(', ')}, borders ${borders.length}, ${harbors.length} harbors`);

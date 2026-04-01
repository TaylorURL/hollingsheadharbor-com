<p align="center"><img src="public/logo.jpg" alt="Hollingshead Harbor" width="140" /></p>

<h1 align="center">Hollingshead Harbor</h1>

<p align="center"><strong>Marine Transportation & Port Services — A Division of SRM Concrete</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/v1.2-release-1e3a5f" alt="v1.2" />
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" alt="React 19.2" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white" alt="Vite 7.2" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind 3.4" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" alt="React Router 7" />
  <img src="https://img.shields.io/badge/Leaflet-OpenStreetMap-199900?logo=leaflet&logoColor=white" alt="Leaflet / OpenStreetMap" />
</p>

---

Hollingshead Harbor is the official website for the marine transportation division of SRM Concrete. Founded in 1999 by Mike Hollingshead, the company operates 13 strategic harbor locations across 6 states — Alabama, Florida, Michigan, Ohio, Tennessee, and Texas. The site presents the company's full service offering, leadership team, port network, and founding history, and drives prospective customers toward finding a regional sales representative.

The application is a purely static React SPA with no backend, no database, and no authentication layer. Every piece of content — team members, services, and harbor locations — is sourced from static JSON data files, keeping deployments simple and the content layer transparent and portable. All routes render inside a shared nested layout that provides a consistent header, footer, and scroll-restoration behavior across every page.

---

## Routing & Layout

React Router 7's nested layout routing wraps all seven routes inside a single `Layout` component that mounts the two-tier sticky header, the page `Outlet`, the footer, and a `ScrollToTop` utility that resets scroll position on route transitions. This architecture ensures shared chrome is rendered exactly once regardless of which route is active, and that scroll behavior is predictable across all navigation paths.

The seven routes cover: Home, About, Story, Team, Services, Locations, and Privacy Policy.

## Header & Navigation

The header uses a two-tier sticky structure. The top bar presents the company phone number, the HQ location, and social links to SRM's accounts. The bottom bar holds the logo, the primary navigation links, and a "Find a Sales Rep" CTA that points to smyrnareadymix.com. On scroll, the entire header compresses to reclaim vertical space. On mobile, an animated hamburger control expands a slide-down drawer that provides full navigation access without a separate mobile route or modal overlay.

## Hero Sections

Every page opens with a reusable `HeroSection` component that renders a full-width background image with a slow-panning 30-second keyframe animation, communicating motion and scale without video overhead. The bottom edge of each hero is masked by an SVG wave that blends the hero into the page body, creating visual continuity between the above-the-fold section and the content below. The component accepts page-specific imagery and copy, keeping the animation and masking behavior centralized.

## Scroll-Reveal Animations

A `useScrollAnimation` hook wires `IntersectionObserver` to target elements, applying CSS classes that trigger entrance animations as content enters the viewport. Staggered timing is expressed via `.stagger-1` through `.stagger-4` classes, allowing groups of sibling elements to animate into view in sequence without JavaScript-driven delay timers. This keeps animation logic in CSS where it belongs and the hook itself minimal.

## Locations & Interactive Map

The Locations page is the most interactive surface on the site. A full-width Leaflet map renders all 13 harbors as interactive markers using OpenStreetMap tiles — no API key required. Alongside the map, a sidebar lists every location with its address, coordinates, phone number, and named contact. The sidebar supports both text search and state-based filtering, letting visitors quickly isolate harbors relevant to their region. Selecting a harbor from the sidebar or clicking a map marker synchronizes both views. All location data lives in `locations.json`.

## Services

Six service types — Bulk Dry Cargo, Vessel Charter, Barge Charter, Maritime Logistics, Port Services, and Material Transport — are rendered in a responsive grid from `services.json`. Each service card communicates scope and capability in prose rather than bullet points.

## About & Story

The About page presents the company's three core service types, four core values, and its positioning within the SRM family of companies. The Story page narrates the company's history from Mike Hollingshead's founding in 1999, providing the human context behind the port network. Both pages use the shared `HeroSection` and scroll-reveal system for visual consistency.

## Team

Leadership is presented via cards driven by `team.json`: Mike Hollingshead (Chairman), Jeff (CEO), and Ryan (SRM Materials President). The static JSON approach means team updates require no code changes.

---

## Architecture

| Layer | Technology |
|---|---|
| UI Framework | React 19.2 |
| Build Tooling | Vite 7.2 |
| Styling | Tailwind CSS 3.4 with custom brand color extensions (navy `#2a3163`, red `#dc2626`) |
| Routing | React Router 7 (nested layout pattern) |
| Map | Leaflet + OpenStreetMap (no API key) |
| Data Layer | Static JSON files — `team.json`, `services.json`, `locations.json` |
| Animations | `useScrollAnimation` hook + CSS keyframes + stagger classes |
| Custom Hook | `useScrollAnimation` — IntersectionObserver → CSS class binding |
| Deployment | Vercel with SPA rewrite rule |
| External APIs | None |

---

## Project Stats

| Metric | Value |
|---|---|
| Routes | 7 |
| Harbor Locations | 13 |
| States Covered | 6 |
| Service Types | 6 |
| Leadership Members | 3 |
| Core Values | 4 |
| Custom React Hooks | 1 |

---

<p align="center"><sub>Built by <strong>Trenton Taylor</strong></sub></p>

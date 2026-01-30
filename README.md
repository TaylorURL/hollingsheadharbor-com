<img src="public/logo.jpg" alt="Hollingshead Harbor Logo" width="200" />

# Hollingshead Harbor

**Marine Transportation & Bulk Cargo Shipping Platform**

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)

---

## Overview

Hollingshead Harbor is the marine transportation division of SRM Concrete, providing efficient bulk dry cargo shipping services across a network of ports in **Alabama, Florida, Michigan, Tennessee, and Texas**. This website showcases our maritime logistics capabilities, leadership team, port locations, and the story of our growth since 1999.

---

## Core Features

### Public-Facing Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated background, services overview, and company introduction |
| **Our Story** | The journey from a family-owned concrete company to national maritime operations |
| **Our Team** | Leadership directory with executive profiles and photos |
| **Services** | Bulk cargo, vessel charter, barge charter, and logistics planning services |
| **Locations** | Interactive map with filterable port locations across 5 states |
| **Privacy Policy** | Data protection and SMS consent information |

### Interactive Elements

| Feature | Description |
|---------|-------------|
| **Animated Hero** | Parallax background with smooth scroll animations |
| **Interactive Map** | Leaflet-powered location finder with state filtering |
| **Scroll Animations** | Fade-in effects for content sections as user scrolls |
| **Responsive Design** | Mobile-first design that adapts to all screen sizes |
| **Sticky Navigation** | Always-accessible menu with social media links |

### Design System

| Element | Description |
|---------|-------------|
| **Color Scheme** | American red, white, and blue theme with opacity overlays |
| **Typography** | Inter font family for clean, modern readability |
| **Components** | Modular React components for cards, navigation, and layout |
| **CSS Variables** | Centralized theming system for consistent styling |

---

## Tech Stack

```
Frontend        React 19.2 + React Router 7.1
Styling         Tailwind CSS 3.4 + Custom CSS Variables
Build Tool      Vite 7.2
Maps            Leaflet 1.9.4
Icons           FontAwesome (via CDN)
Code Quality    ESLint + Prettier
Deployment      Static hosting (ready for Netlify, Vercel, etc.)
```

---

## Project Structure

```
hollingsheadharbor-com/
├── public/
│   ├── logo.jpg                    # Company logo
│   ├── background.jpg              # Hero section background
│   ├── team-*.jpg                  # Leadership team photos
│   ├── marine-operations.jpg       # Service images
│   └── version.json                # Build version tracking
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation bar
│   │   ├── Footer.jsx              # Footer with company info
│   │   ├── HeroSection.jsx         # Animated hero component
│   │   ├── LocationMap.jsx         # Interactive Leaflet map
│   │   ├── TeamCard.jsx            # Leadership profile cards
│   │   ├── ServiceCard.jsx         # Service feature cards
│   │   └── BackToTop.jsx           # Scroll-to-top button
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Story.jsx               # Company history
│   │   ├── Team.jsx                # Leadership directory
│   │   ├── Services.jsx            # Service offerings
│   │   ├── Locations.jsx           # Port locations
│   │   └── PrivacyPolicy.jsx       # Legal information
│   ├── data/
│   │   ├── team.json               # Leadership team data
│   │   ├── services.json           # Service descriptions
│   │   └── locations.json          # Port location data
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Scroll-triggered animations
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles + theme variables
├── scripts/
│   ├── cleanup.js                  # Code cleanup automation
│   └── release.js                  # Build & deploy automation
└── .env                            # Environment variables (not committed)
```

---

## Development

### Prerequisites

- Node.js 22.21.1+ (via nvm)
- npm

### Setup

```bash
git clone <repository-url>
cd hollingsheadharbor-com
npm install
cp .env.example .env
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:5173 |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |
| `npm run cleanup` | Remove console.logs, unused CSS, and format code |
| `npm run release` | Full release: version bump, cleanup, build, commit, push |

### Release Workflow

The automated release process:

1. Increments version in `version.json`
2. Runs Prettier formatting
3. Removes console.logs and unused CSS
4. Builds production bundle
5. Generates AI-powered commit message via Grok
6. Commits all changes
7. Pushes to GitHub

```bash
npm run release
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
GROK_API_KEY=your_grok_api_key_here
```

The Grok API key is used for AI-powered commit message generation during releases.

---

## Design Guidelines

### Color Palette

- **Primary Blue**: `rgb(42, 49, 99)` - American blue for headers and accents
- **Red**: `#dc2626` - American red for CTAs and highlights
- **White**: `#ffffff` - Clean backgrounds and text
- **Opacity Overlays**: Blue containers with opacity over white backgrounds

### Typography

- **Font Family**: Inter (sans-serif)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Animations

- Scroll-triggered fade-ins for content sections
- Parallax effect on hero background
- Smooth transitions on hover states
- Mobile-friendly touch interactions

---

## Data Management

### Team Members

Edit `src/data/team.json` to update leadership profiles:

```json
{
  "name": "John Doe",
  "title": "Chief Executive Officer",
  "image": "/team-john-doe.jpg"
}
```

### Port Locations

Edit `src/data/locations.json` to add/update ports:

```json
{
  "name": "Port Name",
  "city": "City",
  "state": "TX",
  "address": "123 Harbor Blvd",
  "lat": 29.7604,
  "lng": -95.3698
}
```

### Services

Edit `src/data/services.json` to modify service offerings:

```json
{
  "title": "Service Name",
  "description": "Service description",
  "icon": "fa-ship"
}
```

---

## Deployment

### Build for Production

```bash
npm run build
```

The production files will be in the `dist/` directory.

### Hosting Options

- **Netlify**: Connect GitHub repo and set build command to `npm run build`
- **Vercel**: Import project and configure build settings
- **GitHub Pages**: Use `gh-pages` package to deploy `dist/` folder

---

## Contact Information

**Hollingshead Harbor**  
1000 Hollingshead Circle  
Murfreesboro, TN 37129

Email: info@smyrnareadymix.com  
Phone: (615) 355-1028

---

## Related Companies

Hollingshead Harbor is part of the SRM family of companies:

- **SRM Concrete** - Ready-mix concrete operations
- **SRM Cement** - Cement production
- **SRM Harbor** - Port operations
- **SRM Blocks** - Concrete block manufacturing
- **HMC (Hollingshead Mixer Company)** - Equipment manufacturing
- **Hollingshead Aviation** - Aviation services

---

Built with dedication by the SRM team | Founded 1999

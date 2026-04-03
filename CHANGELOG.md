# Changelog

All notable changes to Hollingshead Harbor will be documented in this file.

## [1.2.7] - 2026-04-03

- `package.json` — version bump to 1.2.7
- `public/nit.json` — metadata update
- `src/components/GoogleMap.jsx` — inline style to Tailwind
- `src/components/LocationMap.jsx` — inline style to Tailwind

## [1.2.6] - 2026-04-02

- Add NotFound page with 404 catch-all route
- Undefined URLs now show a styled 404 page instead of blank content

## [1.2.5] - 2026-04-02

- hollingsheadharbor-com Release v1.2.5

## [1.2.4] - 2026-04-01

- hollingsheadharbor-com Release v1.2.4

## [1.2.3] - 2026-04-01

- hollingsheadharbor-com Release v1.2.3

## [1.2.3] - 2026-04-01

- hollingsheadharbor-com Release v1.2.3

## [1.2.2] - 2026-04-01

- hollingsheadharbor-com Release v1.2.2

## [1.2.1] - 2026-04-01

- hollingsheadharbor-com Release v1.2.1

## [1.2] - 2026-04-01

- hollingsheadharbor-com Release v1.2

## [1.1] - 2026-04-01

- hollingsheadharbor-com Release v1.1

## [1.1] - 2026-02-02

- Added new dependency `turl-release` from GitHub repository `bradley-t-t/turl-release` in `package.json` and `package-lock.json`
- Updated `release` script in `package.json` to use `turl-release` instead of the previous custom script
- Removed custom scripts `cleanup.js` and `release.js` from the `scripts` directory
- Removed `cleanup` script from `package.json`
- Added new file `public/turl.json` with version and project metadata
- Removed file `public/version.json` with old version metadata

## [1.6] - 2026-02-01

- Added new vercel.json configuration file

## [1.5] - 2026-01-30

- Updated logo image in public/logo.jpg with a new version (file size increased from 219599 to 497692 bytes)

## [1.4] - 2026-01-30

- Code formatting and cleanup

## [1.3] - 2026-01-30

- Simplified README.md content by removing detailed sections on development setup, design guidelines, and project structure details.
- Updated the overview description to be more concise, focusing on core company information.
- Revised the website pages table with shorter descriptions for each page.
- Consolidated public features, removing entries like Animated Hero and Sticky Navigation, and focusing on key functionalities like Responsive Design and Interactive Map.
- Simplified the tech stack section by removing references to custom CSS variables, code quality tools, and deployment details.
- Condensed project structure to a high-level overview of key directories and files, removing detailed file descriptions and scripts.

## [1.2] - 2026-01-30

- Updated README.md to include detailed project documentation for Hollingshead Harbor, a marine transportation and bulk cargo shipping platform.
- Added company overview, core features, and public-facing pages description.
- Included interactive elements like animated hero sections and responsive design details.
- Documented the tech stack with React 19.2, Tailwind CSS 3.4, and Vite 7.2.
- Outlined project structure with components, pages, and data organization.
- Provided development setup instructions and available scripts for building and releasing.
- Added design guidelines for color palette, typography, and animations.
- Included data management details for team members and port locations.

## [1.1] - 2026-01-30

- Added a new cleanup script to remove console.log statements from JavaScript files
- Implemented functionality in cleanup script to detect and remove unused CSS classes
- Introduced tracking of statistics for logs removed and CSS classes processed in cleanup script

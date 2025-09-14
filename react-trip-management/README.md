React Trip Management (SPA)
A single-page React application to manage trips with CRUD, search, filter, sort, pagination, validation, and a responsive UI using dummy JSON data (no backend).

Features
Display trips in a responsive table with mobile card view.

Add, edit, and delete trips with localStorage persistence.

Search by destination; filter by status (PLANNED, ONGOING, COMPLETED).

Sort by start date or price, ascending/descending.

Client-side pagination with page controls.

Form validation via React Hook Form.

Responsive design powered by Tailwind CSS.

Summary widgets for totals and average price.

Tech Stack
React 18+/19 with Vite

React Router v6+

React Hook Form

Tailwind CSS v4 with official Vite integration

Local state with useState/useEffect and a localStorage hook

Routes
/ — Dashboard (Trip list + Search + Filter + Pagination)

/trips — Trip list (alias to Dashboard list experience)

/add — Add Trip form

/edit/:id — Edit Trip form

— Fallback to /

Project Structure
src/
components/
Navbar.jsx
Pagination.jsx
SearchFilter.jsx
SummaryWidget.jsx
TripForm.jsx
TripList.jsx
pages/
Dashboard.jsx
Trips.jsx
AddTrip.jsx
EditTrip.jsx
data/
trips.js
hooks/
useLocalStorage.js
App.jsx
main.jsx
index.css

Getting Started
Prerequisites

Node.js 18+ and npm

Install

npm install

Run Dev Server

npm run dev

Build

npm run build

npm run preview

Styling (Tailwind v4)
vite.config.js

Uses React plugin + Tailwind v4 plugin.

src/index.css

Use the new Tailwind v4 imports:

@import "tailwindcss";

Optional: @plugin "@tailwindcss/forms";

If forms plugin is used, install it:

npm install @tailwindcss/forms

main.jsx

Ensure: import "./index.css";
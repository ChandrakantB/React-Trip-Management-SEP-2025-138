Tech Stack
React 18+/19 with Vite

React Router v6+

React Hook Form

Tailwind CSS v4 with official Vite plugin

Local state via useState/useEffect and a localStorage hook

Routes
/ — Dashboard (Trip list + Search + Filter + Pagination)

/trips — Trip list (same list experience)

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
vite.config.js uses the React plugin and Tailwind v4 plugin.

src/index.css:

@import "tailwindcss";

Optional: @plugin "@tailwindcss/forms"; (install via npm i @tailwindcss/forms or remove this line)

main.jsx: import "./index.css";

Data
Dummy trips are defined in src/data/trips.js and loaded into localStorage on first run (id, destination, startDate, endDate, price, status).

import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const linkBase = "text-sm px-3 py-2 rounded-lg transition";
  const active = "bg-blue-600 text-white";
  const idle = "text-gray-700 hover:bg-gray-100";

  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg md:text-xl font-bold tracking-tight">
          Trip Management
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive && pathname === "/" ? active : idle}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/trips"
            className={({ isActive }) => `${linkBase} ${isActive ? active : idle}`}
          >
            Trips
          </NavLink>
          <Link
            to="/add"
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm bg-blue-50 text-blue-700 hover:bg-blue-100"
          >
            + Add Trip
          </Link>
        </nav>
      </div>
    </header>
  );
}

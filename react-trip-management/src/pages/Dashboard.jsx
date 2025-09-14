import { useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { initialTrips } from "../data/trips.js";
import SearchFilter from "../components/SearchFilter.jsx";
import SummaryWidget from "../components/SummaryWidget.jsx";
import TripList from "../components/TripList.jsx";
import Pagination from "../components/Pagination.jsx";

export default function Dashboard() {
  const [trips, setTrips] = useLocalStorage("trips", initialTrips);
  const [query, setQuery] = useState({ search: "", status: "ALL", sortBy: "startDate", sortDir: "asc", page: 1, size: 5 });

  const filtered = useMemo(() => {
    let data = [...trips];

    if (query.search) {
      const s = query.search.toLowerCase();
      data = data.filter(t => t.destination.toLowerCase().includes(s));
    }
    if (query.status !== "ALL") {
      data = data.filter(t => t.status === query.status);
    }
    data.sort((a, b) => {
      const dir = query.sortDir === "asc" ? 1 : -1;
      if (query.sortBy === "price") return (Number(a.price) - Number(b.price)) * dir;
      return (new Date(a.startDate) - new Date(b.startDate)) * dir;
    });
    return data;
  }, [trips, query]);

  const pages = Math.max(1, Math.ceil(filtered.length / query.size));
  const start = (query.page - 1) * query.size;
  const current = filtered.slice(start, start + query.size);

  const onDelete = (id) => {
    if (confirm("Delete this trip?")) {
      setTrips(prev => prev.filter(t => t.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <SummaryWidget trips={filtered} />
      <div className="rounded-xl border bg-white p-4 space-y-4">
        <SearchFilter
          search={query.search}
          status={query.status}
          sortBy={query.sortBy}
          sortDir={query.sortDir}
          onChange={(patch) => setQuery(q => ({ ...q, ...patch, page: 1 }))}
        />
        <TripList trips={current} onDelete={onDelete} />
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">Showing {current.length} of {filtered.length}</div>
          <Pagination page={query.page} pages={pages} onPage={(p) => setQuery(q => ({ ...q, page: p }))} />
        </div>
      </div>
    </div>
  );
}

export default function SearchFilter({ search, status, sortBy, sortDir, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <input
        value={search}
        onChange={e => onChange({ search: e.target.value })}
        placeholder="Search destination..."
        className="w-full rounded-lg border px-3 py-2"
        aria-label="Search by destination"
      />

      <select
        value={status}
        onChange={e => onChange({ status: e.target.value })}
        className="w-full rounded-lg border px-3 py-2"
        aria-label="Filter by status"
      >
        <option value="ALL">All Statuses</option>
        <option value="PLANNED">Planned</option>
        <option value="ONGOING">Ongoing</option>
        <option value="COMPLETED">Completed</option>
      </select>

      <select
        value={sortBy}
        onChange={e => onChange({ sortBy: e.target.value })}
        className="w-full rounded-lg border px-3 py-2"
        aria-label="Sort by"
      >
        <option value="startDate">Sort by Start Date</option>
        <option value="price">Sort by Price</option>
      </select>

      <select
        value={sortDir}
        onChange={e => onChange({ sortDir: e.target.value })}
        className="w-full rounded-lg border px-3 py-2"
        aria-label="Sort direction"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

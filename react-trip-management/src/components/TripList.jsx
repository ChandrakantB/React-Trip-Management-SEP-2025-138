import { Link } from "react-router-dom";

const badgeColors = {
  PLANNED: "bg-blue-100 text-blue-700",
  ONGOING: "bg-yellow-100 text-yellow-700",
  COMPLETED: "bg-green-100 text-green-700",
};

export default function TripList({ trips, onDelete }) {
  if (!trips.length) {
    return <div className="border rounded-xl p-8 text-center bg-white">No trips found.</div>;
  }

  return (
    <div className="overflow-x-auto border rounded-xl bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Destination</th>
            <th className="px-4 py-3 text-left">Start</th>
            <th className="px-4 py-3 text-left">End</th>
            <th className="px-4 py-3 text-left">Price ($)</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="px-4 py-3 font-medium">{t.destination}</td>
              <td className="px-4 py-3">{t.startDate}</td>
              <td className="px-4 py-3">{t.endDate}</td>
              <td className="px-4 py-3">{Number(t.price).toLocaleString()}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs ${badgeColors[t.status]}`}>{t.status}</span>
              </td>
              <td className="px-4 py-3">
                <div className="flex justify-end gap-2">
                  <Link to={`/edit/${t.id}`} className="rounded-lg border px-3 py-1.5 hover:bg-gray-50">
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(t.id)}
                    className="rounded-lg border px-3 py-1.5 hover:bg-red-50 text-red-600 border-red-200"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="p-3 grid gap-3 sm:hidden">
        {trips.map((t) => (
          <div key={t.id} className="border rounded-xl bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{t.destination}</div>
              <span className={`px-2 py-1 rounded-full text-xs ${badgeColors[t.status]}`}>{t.status}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {t.startDate} → {t.endDate}
            </div>
            <div className="mt-2 text-sm">Price: ${Number(t.price).toLocaleString()}</div>
            <div className="mt-3 flex gap-2">
              <Link to={`/edit/${t.id}`} className="rounded-lg border px-3 py-1.5 text-sm">
                Edit
              </Link>
              <button onClick={() => onDelete(t.id)} className="rounded-lg border px-3 py-1.5 text-sm text-red-600 border-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SummaryWidget({ trips }) {
  const total = trips.length;
  const avg = total ? Math.round(trips.reduce((s, t) => s + Number(t.price || 0), 0) / total) : 0;
  const planned = trips.filter(t => t.status === "PLANNED").length;
  const ongoing = trips.filter(t => t.status === "ONGOING").length;
  const completed = trips.filter(t => t.status === "COMPLETED").length;

  const card = "rounded-xl border bg-white p-4 flex-1 text-center";
  const num = "text-2xl font-semibold";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className={card}><div className="text-xs text-gray-500">Total Trips</div><div className={num}>{total}</div></div>
      <div className={card}><div className="text-xs text-gray-500">Avg Price</div><div className={num}>${avg}</div></div>
      <div className={card}><div className="text-xs text-gray-500">Planned</div><div className={num}>{planned}</div></div>
      <div className={card}><div className="text-xs text-gray-500">Completed</div><div className={num}>{completed}</div></div>
    </div>
  );
}

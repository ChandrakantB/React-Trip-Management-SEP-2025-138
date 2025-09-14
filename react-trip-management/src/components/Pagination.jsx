export default function Pagination({ page, pages, onPage }) {
  if (pages <= 1) return null;
  return (
    <div className="flex items-center gap-2 justify-center md:justify-start">
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-50 hover:bg-gray-50"
        aria-label="Previous page"
      >
        Prev
      </button>
      <span className="text-sm">Page {page} of {pages}</span>
      <button
        onClick={() => onPage(Math.min(pages, page + 1))}
        disabled={page === pages}
        className="rounded-lg border px-3 py-1.5 text-sm disabled:opacity-50 hover:bg-gray-50"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}

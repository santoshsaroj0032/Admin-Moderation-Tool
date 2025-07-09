export default function ListingActions({ listing, onEdit, onApprove, onReject }) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onEdit}
        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm hover:bg-blue-200"
      >
        Edit
      </button>
      {listing.status === 'pending' && (
        <>
          <button
            onClick={onApprove}
            className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm hover:bg-green-200"
          >
            Approve
          </button>
          <button
            onClick={onReject}
            className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm hover:bg-red-200"
          >
            Reject
          </button>
        </>
      )}
    </div>
  );
}
import { useRouter } from 'next/router';

export default function StatusFilter() {
  const router = useRouter();

  const handleFilterChange = (status) => {
    if (status === 'all') {
      const { status: _, ...query } = router.query;
      router.push({ pathname: router.pathname, query });
    } else {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, status },
      });
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleFilterChange('all')}
        className={`px-3 py-1 rounded-full text-sm ${
          !router.query.status ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('pending')}
        className={`px-3 py-1 rounded-full text-sm ${
          router.query.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => handleFilterChange('approved')}
        className={`px-3 py-1 rounded-full text-sm ${
          router.query.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        Approved
      </button>
      <button
        onClick={() => handleFilterChange('rejected')}
        className={`px-3 py-1 rounded-full text-sm ${
          router.query.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
        }`}
      >
        Rejected
      </button>
    </div>
  );
}
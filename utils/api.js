export const fetchListings = async (status = null) => {
  const url = status ? `/api/listings?status=${status}` : '/api/listings';
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch listings');
  return response.json();
};

export const updateListingStatus = async (id, action, adminEmail) => {
  const response = await fetch('/api/listings', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'admin-email': adminEmail,
    },
    body: JSON.stringify({ id, action }),
  });
  if (!response.ok) throw new Error('Failed to update listing');
  return response.json();
};

export const editListing = async (id, data, adminEmail) => {
  const response = await fetch('/api/listings', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'admin-email': adminEmail,
    },
    body: JSON.stringify({ id, action: 'edit', data }),
  });
  if (!response.ok) throw new Error('Failed to edit listing');
  return response.json();
};
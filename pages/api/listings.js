let listings = [
  { id: 1, title: 'Toyota Camry', status: 'pending', price: 50, owner: 'user1@example.com' },
  { id: 2, title: 'Honda Accord', status: 'approved', price: 45, owner: 'user2@example.com' },
  { id: 3, title: 'Ford Mustang', status: 'rejected', price: 70, owner: 'user3@example.com' },
];

let auditLog = [];

export default function handler(req, res) {
  const { method } = req;
  const adminEmail = req.headers['admin-email'];

  switch (method) {
    case 'GET':
      const { status } = req.query;
      const filteredListings = status 
        ? listings.filter(listing => listing.status === status)
        : listings;
      res.status(200).json(filteredListings);
      break;

    case 'PUT':
      const { id, action, data } = req.body;
      const listingIndex = listings.findIndex(l => l.id === id);
      
      if (listingIndex === -1) {
        return res.status(404).json({ message: 'Listing not found' });
      }

      if (action === 'edit') {
        listings[listingIndex] = { ...listings[listingIndex], ...data };
      } else if (['approve', 'reject'].includes(action)) {
        listings[listingIndex].status = action === 'approve' ? 'approved' : 'rejected';
      }

      auditLog.push({
        action,
        listingId: id,
        adminEmail,
        timestamp: new Date().toISOString(),
      });

      res.status(200).json(listings[listingIndex]);
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
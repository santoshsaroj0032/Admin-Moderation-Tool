import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import ListingActions from './ListingActions';
import EditForm from './EditForm';
import { AuthContext } from '../../context/AuthContext';
import Notification from '../Notification';

export default function ListingTable({ initialListings }) {
  const [listings, setListings] = useState(initialListings);
  const [editingListing, setEditingListing] = useState(null);
  const [notification, setNotification] = useState(null);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.status) {
      fetch(`/api/listings?status=${router.query.status}`)
        .then(res => res.json())
        .then(data => setListings(data));
    } else {
      setListings(initialListings);
    }
  }, [router.query.status, initialListings]);

  const handleAction = async (id, action, data = null) => {
    try {
      const response = await fetch('/api/listings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'admin-email': user.email,
        },
        body: JSON.stringify({ id, action, data }),
      });

      if (!response.ok) throw new Error('Action failed');

      const updatedListing = await response.json();
      setListings(listings.map(listing => 
        listing.id === id ? updatedListing : listing
      ));

      setNotification({
        type: 'success',
        message: `Listing ${action} successfully`,
      });
      
      if (action !== 'edit') {
        setEditingListing(null);
      }
    } catch (error) {
      setNotification({
        type: 'error',
        message: `Failed to ${action} listing`,
      });
    }
  };

  return (
    <div>
      {notification && (
        <Notification 
          type={notification.type} 
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {editingListing && (
        <EditForm
          listing={editingListing}
          onSave={(data) => handleAction(editingListing.id, 'edit', data)}
          onClose={() => setEditingListing(null)}
        />
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Owner</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td className="py-2 px-4 border-b">{listing.id}</td>
                <td className="py-2 px-4 border-b">{listing.title}</td>
                <td className="py-2 px-4 border-b">${listing.price}</td>
                <td className="py-2 px-4 border-b">{listing.owner}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    listing.status === 'approved' ? 'bg-green-100 text-green-800' :
                    listing.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {listing.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <ListingActions 
                    listing={listing}
                    onEdit={() => setEditingListing(listing)}
                    onApprove={() => handleAction(listing.id, 'approve')}
                    onReject={() => handleAction(listing.id, 'reject')}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
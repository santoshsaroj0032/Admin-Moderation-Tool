import { createContext, useState } from 'react';

export const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateListing = (id, updates) => {
    setListings(listings.map(listing => 
      listing.id === id ? { ...listing, ...updates } : listing
    ));
  };

  return (
    <ListingsContext.Provider value={{ listings, setListings, updateListing, loading, error }}>
      {children}
    </ListingsContext.Provider>
  );
};
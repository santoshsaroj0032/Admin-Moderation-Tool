import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Car Rental Admin Dashboard" />
      </Head>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Car Rental Admin</h1>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Logged in as: {user.email}</span>
              <button
                onClick={logout}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
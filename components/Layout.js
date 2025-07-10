 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Head from 'next/head';

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Car Rental Admin Dashboard" />
      </Head>

       <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Car Rental Admin</h1>

          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">Logged in as <strong>{user.email}</strong></span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

       <main className="bg-gray-50 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}

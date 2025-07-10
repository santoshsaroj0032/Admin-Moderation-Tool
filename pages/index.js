 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/Auth/LoginForm';

export default function Home() {
  const { user, loading, login } = useAuth();
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!loading && user && isMounted) {
       window.location.href = '/dashboard';
    }
  }, [user, loading, isMounted]);

  const handleLogin = async (email, password) => {
    if (!isMounted) return;
    
    setError('');
    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-lg">Checking authentication status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onLogin={handleLogin} error={error} />
    </div>
  );
}

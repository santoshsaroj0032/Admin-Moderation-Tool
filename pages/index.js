import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
 import { AuthContext } from '../context/AuthContext';
import LoginForm from '../components/Auth/LoginForm';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    const success = login(email, password);
    if (success) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm onLogin={handleLogin} error={error} />
    </div>
  );
}
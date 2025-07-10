 
import { useEffect } from 'react';
import Router from 'next/router';
import { AuthProvider } from '../context/AuthContext';  
 import '../styles/globals.css';

 
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);  
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

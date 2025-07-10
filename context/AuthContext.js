// // import { createContext, useState, useEffect } from 'react';

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Check if user is logged in on initial load
// //     const storedUser = localStorage.getItem('adminUser');
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //     }
// //     setLoading(false);
// //   }, []);

// //   const login = (email, password) => {
// //     // Mock authentication
// //     if (email === 'admin@example.com' && password === 'admin123') {
// //       const user = { email, role: 'admin' };
// //       setUser(user);
// //       localStorage.setItem('adminUser', JSON.stringify(user));
// //       return true;
// //     }
// //     return false;
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     localStorage.removeItem('adminUser');
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, loading, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };
// import { createContext, useState, useEffect, useContext } from 'react';
// import { useRouter } from 'next/router';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await fetch('/api/auth/check', {
//           credentials: 'include'
//         });

//         if (response.ok) {
//           const userData = await response.json();
//           setUser(userData);
//         }
//       } catch (error) {
//         console.error('Auth check failed:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: 'include'
//       });

//       if (response.ok) {
//         const userData = await response.json();
//         setUser(userData);
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error('Login error:', error);
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await fetch('/api/auth/logout', {
//         method: 'POST',
//         credentials: 'include'
//       });
//       setUser(null);
//       router.push('/');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ This is the missing export causing your error
// export const useAuth = () => useContext(AuthContext);
import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', {
          credentials: 'include'
        });
        
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
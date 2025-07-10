// utils/withAuth.js

export default async function withAuth(context) {
  const { req } = context;
  const { cookie } = req.headers;

  // Dummy check - you can improve with real cookie/session logic
  if (cookie?.includes('auth=valid')) {
    return {
      props: {
        user: { email: 'admin@example.com' }
      }
    };
  }

  return {
    props: {
      user: null
    }
  };
}

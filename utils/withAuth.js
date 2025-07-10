 

export default async function withAuth(context) {
  const { req } = context;
  const { cookie } = req.headers;

   if (cookie?.includes('auth=valid')) {
    return {
      props: {
                 user: { email: 'santoshsaroj0032@gmail.com' }
      }
    };
  }

  return {
    props: {
      user: null
    }
  };
}

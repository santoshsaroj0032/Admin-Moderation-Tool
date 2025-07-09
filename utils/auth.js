export const getServerSideProps = async (context) => {
  const { req } = context;
  const user = req.cookies.adminUser 
    ? JSON.parse(req.cookies.adminUser)
    : null;

  return {
    props: {
      user,
    },
  };
};

export const requireAuth = (gssp) => {
  return async (context) => {
    const { props } = await gssp(context);
    
    if (!props.user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props,
    };
  };
};
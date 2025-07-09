import { useContext } from 'react';
// import { getServerSideProps } from '../utils/auth';
import { getServerSideProps as withAuth } from '../utils/auth';

import Layout from '../components/Layout';
import ListingTable from '../components/Dashboard/ListingTable';
import StatusFilter from '../components/Dashboard/StatusFilter';

export default function Dashboard({ initialListings }) {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="mb-6">
          <StatusFilter />
        </div>
        <ListingTable initialListings={initialListings} />
      </div>
    </Layout>
  );
}

// export const getServerSideProps = async (context) => {
//   const authProps = await getServerSideProps(context);
//   if (!authProps.props.user) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // Mock data for listings
//   const initialListings = [
//     { id: 1, title: 'Toyota Camry', status: 'pending', price: 50, owner: 'user1@example.com' },
//     { id: 2, title: 'Honda Accord', status: 'approved', price: 45, owner: 'user2@example.com' },
//     { id: 3, title: 'Ford Mustang', status: 'rejected', price: 70, owner: 'user3@example.com' },
//   ];

//   return {
//     props: {
//       ...authProps.props,
//       initialListings,
//     },
//   };
// };

export const getServerSideProps = async (context) => {
  const authProps = await withAuth(context);

  if (!authProps.props.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Mock data for listings
  const initialListings = [
    { id: 1, title: 'Toyota Camry', status: 'pending', price: 50, owner: 'user1@example.com' },
    { id: 2, title: 'Honda Accord', status: 'approved', price: 45, owner: 'user2@example.com' },
    { id: 3, title: 'Ford Mustang', status: 'rejected', price: 70, owner: 'user3@example.com' },
  ];

  return {
    props: {
      ...authProps.props,
      initialListings,
    },
  };
};

import { useContext } from 'react';
// import { getServerSideProps } from '../utils/auth';
import { requireAuth } from '../utils/auth';

import Layout from '../components/Layout';

export default function AuditLog({ auditLog }) {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Audit Log</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Timestamp</th>
                <th className="py-2 px-4 border-b">Action</th>
                <th className="py-2 px-4 border-b">Listing ID</th>
                <th className="py-2 px-4 border-b">Admin</th>
              </tr>
            </thead>
            <tbody>
              {auditLog.map((log, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{log.action}</td>
                  <td className="py-2 px-4 border-b">{log.listingId}</td>
                  <td className="py-2 px-4 border-b">{log.adminEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = requireAuth(async (context) => {
   const auditLog = [
   
      {
      action: 'approve',
      listingId: 1,
      adminEmail: 'santoshsaroj0032@gmail.com',
      timestamp: new Date().toISOString(),
    },
  ];

  return {
    props: {
      auditLog,
    },
  };
});
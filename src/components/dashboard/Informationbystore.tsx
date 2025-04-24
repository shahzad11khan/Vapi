import { useEffect, useState } from 'react';
import axios from 'axios';
import TableComponent from '../Reuseable/Table'; // update path as needed

const TablePage = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users'); // your actual endpoint
        setUserData(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { label: 'Location', key: 'location' },
    { label: 'Store Owner', key: 'storeOwner' },
    { label: 'Subscription Type', key: 'subscriptionType' },
    { label: 'Subscription Expiry', key: 'subscriptionExpiry' },
    { label: 'Package', key: 'package' },
    { label: 'Status', key: 'status' },
  ];

  const handleEdit = (user: any) => {
    console.log('Edit clicked:', user);
    // e.g. open modal
  };

  const handleDelete = (user: any) => {
    console.log('Delete clicked:', user);
    // e.g. show confirmation
  };

  return (
    <div className="p-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponent
          data={userData}
          columns={columns}
          sortOptions={['location', 'storeOwner', 'status']}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TablePage;

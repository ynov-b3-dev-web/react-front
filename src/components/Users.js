import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Utilisateurs</h1>
      {error && <p>Une erreur est survenue</p>}

      {users !== null ? (
        users.map((user) => <p key={user.id}>{user.username}</p>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Users;

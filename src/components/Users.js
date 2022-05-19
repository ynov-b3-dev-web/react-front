import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then((userList) => setUsers(userList))
      .catch((e) => {
        console.error(e);
        setError(true);
      });
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

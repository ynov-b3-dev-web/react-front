import useFetch from '../hooks/useFetch';
import { fetchOtherUsers } from '../services/userService';

const Users = () => {
  const [loading, data, error] = useFetch(fetchOtherUsers);

  return (
    <div>
      <h1>Utilisateurs</h1>
      {error && <p>Une erreur est survenue</p>}

      {!loading ? (
        data.map((user) => <p key={user.id}>{user.username}</p>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Users;

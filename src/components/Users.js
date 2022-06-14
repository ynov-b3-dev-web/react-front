import { CircularProgress } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchOtherUsers } from '../services/userService';

const Users = () => {
  const { isLoading, isError, data, error } = useQuery('users', fetchOtherUsers);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>Utilisateurs</h1>

      {!isLoading ? (
        data.map((user) => <p key={user.id}>{user.username}</p>)
      ) : (
        <CircularProgress size={30} />
      )}
    </div>
  );
};

export default Users;

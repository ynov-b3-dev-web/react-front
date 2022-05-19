import axios from 'axios';
import { users } from './data';

export const fetchUsers = async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/users');
  return response.data;
};

export const fetchOtherUsers = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(users), 2000));
};

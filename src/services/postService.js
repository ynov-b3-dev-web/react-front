import axios from 'axios';

export const fetchPosts = async () => {
  return axios.get('http://jsonplaceholder.typicode.com/posts');
};

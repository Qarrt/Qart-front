import axios from 'axios';

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return { axiosInstance };
};

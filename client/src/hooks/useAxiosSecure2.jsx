import axios from "axios";

export const axiosSecure2 = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure2 = () => {
  return axiosSecure2;
};

export default useAxiosSecure2;

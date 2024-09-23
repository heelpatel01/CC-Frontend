import Axios from "axios";

const AxiosInstance = Axios.create({
  baseURL: "https://crypto-compass-production.up.railway.app/", //   Replace for Hosting development:- import.meta.env.VITE_BASE_URL",
  withCredentials: true,
});

export default AxiosInstance;

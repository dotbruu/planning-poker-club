import env from "@/config/env";
import axios from "axios";

const api = axios.create({
  baseURL: env.apiUrl,
});

export default api;

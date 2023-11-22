import env from "@/config/env";
import axios from "axios";

const api = axios.create({
  baseURL: typeof window === "undefined" ? env.internalApiUrl : env.apiUrl,
});

export default api;

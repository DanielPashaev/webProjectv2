import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const ApiService = axios.create({
  baseURL: API_BASE_URL,
});

export default ApiService;

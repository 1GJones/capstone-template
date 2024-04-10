import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", 
});

export const setAccessToken = (token) => {
  if(!token) {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('accessToken')
    return 
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  localStorage.setItem('accessToken', token)
}

export default api;
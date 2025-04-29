import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})

export const login = (fromData) => API.post('/auth/login', fromData);
export const signUp = (fromData) => API.post('/auth/register', fromData)
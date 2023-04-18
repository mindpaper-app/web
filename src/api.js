import axios from 'axios'

export const login = (username, password) => {
   return axios.post(`/auth/login`, { username, password })
}

export const register = (username, password) => {
   return axios.post(`/auth/register`, { username, password })
}

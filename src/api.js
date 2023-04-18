import axios from 'axios'

export const login = (username, password) => {
   return axios.post(`/auth/login`, { username, password })
}

export const register = (username, password) => {
   return axios.post(`/auth/register`, { username, password })
}

export const createNote = (title, content) => {
   return axios.post(`/notes/create`, { title, content })
}

export const getAllNotes = () => {
   return axios.get(`/notes/all`)
}

export const getNote = (id) => {
   return axios.get(`/notes/${id}`)
}

export const updateNote = (id, title, content) => {
   return axios.post(`/notes/save/${id}`, { title, content })
}
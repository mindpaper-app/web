import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './styles/index.scss'

axios.defaults.baseURL = 'http://localhost:3001/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
)

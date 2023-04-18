import Cookies from "universal-cookie"
import { useEffect, useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import LoadingScreen from "./LoadingScreen"

const ProtectedRoute = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const token = cookies.get('token')
  const [user, setUser] = useState({})

  const checkLoggedIn = async () => {
    try {
      const { data } = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setUser(data)
    } catch (error) {
      console.log(error)
      cookies.remove('token', { path: '/', sameSite: 'strict' })
      navigate('/')
    }
  }

  useEffect(() => {
    checkLoggedIn()
  }, [])

  return token ?
    user ? <Outlet context={user} /> : <LoadingScreen />
    : <Navigate to='/' />
}

export default ProtectedRoute
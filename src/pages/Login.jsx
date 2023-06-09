import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { login } from '../api'
import '../styles/Auth.scss'

import { CiStickyNote, CiLogin } from 'react-icons/ci'

const Login = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if(cookies.get('token')) navigate('/app')
    }, [])

    const displayError = (msg) => {
        setError(msg)
        setTimeout(() => setError(''), 5000)
    }

    const handleButton = async() => {
        if(username === '' || password === '') return displayError('Fill all fields')
        try {
            const { data } = await login(username, password)
            const { token } = data

            cookies.set('token', token, { path: '/', sameSite: 'strict' })
            navigate('/app')
        } catch (err) {
            if(err.response.status === 400) return displayError('Invalid username or password')
            displayError('Something went wrong')
        }
    }

    return (
        <div className='auth_page'>
            <div className="auth_info">
                <CiStickyNote className='icon' />
                <h1>Create new account</h1>
                <p>A fast and reliable note taking app</p>
            </div>
            <div className="auth_card">
                <div className="input">
                    <p>Username</p>
                    <input type="text" placeholder='someuser1' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <p>Hasło</p>
                    <input type="password" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className={`error ${error && 'show'}`}>{error || <>&nbsp;</>}</p>
                <button onClick={handleButton}><CiLogin />Login</button>
                <p className='info'>Don't have an account? Register <Link to="/register">here</Link></p>
            </div>
        </div>
    )
}

export default Login
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios'
import { register } from '../api'
import '../styles/Auth.scss'

import { CiStickyNote, CiLogin } from 'react-icons/ci'

const Register = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (cookies.get('token')) navigate('/app')
    }, [])

    const displayError = (msg) => {
        setError(msg)
        setTimeout(() => setError(''), 5000)
    }

    const handleButton = async () => {
        if (username === '' || password === '') return displayError('Fill all fields')
        try {
            const { data } = await register(username, password)

            navigate('/')
        } catch (err) {
            if (err.response.status === 400) return displayError('Username already exists')
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
                <button onClick={handleButton}><CiLogin />Register</button>
                <p className='info'>Already have an account? Login <Link to="/">here</Link></p>
            </div>
        </div>
    )
}

export default Register
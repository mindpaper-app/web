import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios'
import { login } from '../api'
import '../styles/Auth.scss'

import { CiStickyNote, CiLogin } from 'react-icons/ci'

const Login = () => {
    const navigate = useNavigate()
    const cookies = new Cookies()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const displayError = (msg) => {
        setError(msg)
        setTimeout(() => setError(''), 5000)
    }

    const handleButton = async() => {
        if(username === '' || password === '') return displayError('Wypełnij wszystkie pola')
        try {
            const { data } = await login(username, password)
            const { token } = data

            cookies.set('token', token, { path: '/', sameSite: 'none' })
            navigate('/app')
        } catch (err) {
            if(err.response.status === 400) return displayError('Nieprawidłowa nazwa użytkownika lub hasło')
            displayError('Wystąpił błąd')
        }
    }

    return (
        <div className='auth_page'>
            <div className="auth_info">
                <CiStickyNote className='icon' />
                <h1>Zaloguj się do mindpaper</h1>
                <p>Szybka i niezawodna aplikacja do notatek</p>
            </div>
            <div className="auth_card">
                <div className="input">
                    <p>Nazwa uzytkownika</p>
                    <input type="text" placeholder='jakub0' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <p>Hasło</p>
                    <input type="password" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className={`error ${error && 'show'}`}>{error || <>&nbsp;</>}</p>
                <button onClick={handleButton}><CiLogin />Zaloguj się</button>
                <p className='info'>Nie posiadasz konta? Zarejestruj się <Link to="/">tutaj</Link></p>
            </div>
        </div>
    )
}

export default Login
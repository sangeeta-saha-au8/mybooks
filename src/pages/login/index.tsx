import React, { type ChangeEvent, type ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/result.services'
import './Login.css'

const Login = (): ReactElement => {
  interface IUser {
    email: string
    password: string
  }

  const [user, setUser] = useState<IUser>({ email: '', password: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    void (async () => {
      const resp = await login(user)
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        navigate('/')
      } else if (resp.status !== 500) {
        setErrorMsg('Invalid Credentials')
      } else {
        alert('Error Logging in')
      }
    })()
  }

  return (
        <>
            <div className="loginBorder">
                <div className='imageLeft'>
                    <img src='http://localhost:3000/books.jpg' alt="library image"></img>
                </div>
                <div className='formRight'>
                    <h3> Login </h3>
                    <div className='inputRow'>

                        <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        name="email"
                        onChange={handleChange}
                        />
                    </div>
                    <div className='inputRow'>
                        <input
                        id="pass"
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        name="password"
                        onChange={handleChange}
                        />
                    </div>
                    <button
                      className='loginButton'
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    <div className='inputRow'>
                      {errorMsg}
                    </div>
                </div>
            </div>
        </>
  )
}

export { Login }

import React, { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = (): ReactElement => {
  const navigate = useNavigate()
  const handleLogOut = (event: React.MouseEvent<HTMLButtonElement>): void => {
    localStorage.setItem('token', '')
    navigate('/login')
  }
  return (
    <>
        <div className='appHeader'>
          <span className='title'> MyBooks </span>
          <button className='logOut' onClick={handleLogOut}>
            <img src='http://localhost:3000/Logout.svg' alt="logout image" ></img>
          </button>
        </div>
    </>
  )
}

export { Header }

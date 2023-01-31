import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
  let userParsed: string = ''
  const user: (string | null) = localStorage.getItem('user')
  if (typeof (user) === 'string') {
    userParsed = JSON.parse(user)
  }
  if (userParsed === '') {
    return <Navigate to ="/login" />
  }
  return (
    <>
        <div> Home Page </div>
    </>
  )
}

export { Home }

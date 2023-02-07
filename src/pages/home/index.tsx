import React from 'react'
import { Navigate } from 'react-router-dom'
import { Header } from '../../components/header'
import { HomeComponent } from '../../components/home'

const Home = () => {
  let userParsed: string = ''
  const user: (string | null) = localStorage.getItem('token')
  if (typeof (user) === 'string') {
    userParsed = user
  }
  if (userParsed === '') {
    return <Navigate to ="/login" />
  }
  return (
    <>
        <Header/>
        <HomeComponent/>
    </>
  )
}

export { Home }

import React, { type ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'

function App (): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

//Question14
// Create an HOC named withAuth that restricts access to a specific component to authenticated users only. 
// Implement this HOC on a sample component and demonstrate how it protects routes.

import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'


const AuthApp = () => {
  return (
    <div >
        <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AuthApp
import React from 'react'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'
import Footer from './Footer'
import './App.css'
import {Route, Routes,Navigate} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/> 
        <Route  path='/service' element={<Service/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/error' element={<Error/>}/>
        <Route  path='/*' element={<Navigate to="/error"/>}/>    
      </Routes>
      <Footer/>

    </>
  )
}

export default App

import React from 'react'
import Navbar from './assets/components/Navbar'
// import { Route,Routes } from 'react-router-dom'
// import Home from './assets/components/Home'
// import Products from './assets/components/Products'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default App
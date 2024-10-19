import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeholder from './Pages/Placeholder/Placeholder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Verify from './Pages/verify/Verify'
const App = () => {
const[loginPopup,setLoginPopup]=useState(false);
  return (
    <>
    <div className='app'>
     {loginPopup&&<Login setLoginPopup={setLoginPopup}/>}
      <Navbar  setLoginPopup={setLoginPopup}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeholder/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
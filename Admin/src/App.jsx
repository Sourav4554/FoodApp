import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Orders/Order'

const App = () => {
const url = "https://foodapp-production-ecc5.up.railway.app"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route  path='/' element={<Add url={url}/>}/>
          <Route  path='/list' element={<List url={url}/>}/>
          <Route  path='/order' element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

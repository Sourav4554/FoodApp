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
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route  path='/' element={<Add/>}/>
          <Route  path='/list' element={<List/>}/>
          <Route  path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
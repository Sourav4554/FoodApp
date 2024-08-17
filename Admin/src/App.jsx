import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Order from './Pages/Orders/Order'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route  path='/add' element={<Add/>}/>
          <Route  path='/list' element={<List/>}/>
          <Route  path='/order' element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
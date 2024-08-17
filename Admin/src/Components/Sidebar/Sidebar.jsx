import React, { useState } from 'react'
import './Sidebar.css'
import {icons} from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink className="sidebar-option" to='/' >
                <img src={icons.add_icon} alt="" />
                <p>AddItems</p>
            </NavLink>
            <NavLink className="sidebar-option" to='/list'>
                <img src={icons.listicon} alt="" />
                <p>ListItems</p>
            </NavLink>
            <NavLink className="sidebar-option" to='/order'>
                <img src={icons.ordericon} alt="" className='order-icon'/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
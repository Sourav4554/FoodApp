import React from 'react'
import './Sidebar.css'
import {icons} from '../../assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={icons.add_icon} alt="" />
                <p>AddItems</p>
            </div>
            <div className="sidebar-option">
                <img src={icons.listicon} alt="" />
                <p>ListItems</p>
            </div>
            <div className="sidebar-option">
                <img src={icons.ordericon} alt="" className='order-icon'/>
                <p>Orderssss</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
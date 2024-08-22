import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { storeContext } from "../../Context/Storecontext";
const Navbar = ({setLoginPopup}) => {
  const Navigate=useNavigate()
  const [menu, setMenu] = useState("home");
  const {getTotalAmount,token,createToken}=useContext(storeContext)
  const logout=()=>{
  localStorage.removeItem("token");
  createToken("");
Navigate('/')
  }
  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <Link to='/'><h1>FoodDrop</h1></Link>
      <ul className="navbar-menu">
       <Link to='/'> <li onClick={() => { setMenu("home");}} className={menu === "home" ? "active" : ""}>Home</li></Link>
        <a href="#explore-menu" onClick={() => {setMenu("menu");}} className={menu === "menu" ? "active" : ""}> Menu</a>
        <a href="#app-download" onClick={() => { setMenu("mobile-app");}}className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => {  setMenu("contact-us");}}className={menu === "contact-us" ? "active" : ""}>ContactUs</a>
      </ul>
      {/* navbar-right-section */}
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="" />
         <Link to='/cart' > <img src={assets.basket_icon} alt="" /></Link>

          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>{setLoginPopup(true)}}>Signin</button>:
        <div className="navbar-profile">
        <img src={assets.profile_icon} alt=""  />
        <ul className="navbar-profile-dropdown">
          <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          <hr />
          <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
        </ul>
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;

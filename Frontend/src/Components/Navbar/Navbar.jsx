import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { storeContext } from "../../Context/Storecontext";
const Navbar = ({setLoginPopup}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalAmount}=useContext(storeContext)
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
        <button onClick={()=>{setLoginPopup(true)}}>Signin</button>
      </div>
    </div>
  );
};

export default Navbar;

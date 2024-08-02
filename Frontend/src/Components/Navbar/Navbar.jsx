import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = ({setLoginPopup}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="" className="logo" /> */}
      <h1>FoodDrop</h1>
      <ul className="navbar-menu">
        <li onClick={() => { setMenu("home");}} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => {setMenu("menu");}} className={menu === "menu" ? "active" : ""}> Menu</li>
        <li onClick={() => { setMenu("mobile-app");}}className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => {  setMenu("contact-us");}}className={menu === "contact-us" ? "active" : ""}>ContactUs</li>
      </ul>
      {/* navbar-right-section */}
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="" />
          <img src={assets.basket_icon} alt="" />

          <div className="dot"></div>
        </div>
        <button onClick={()=>{setLoginPopup(true)}}>Signin</button>
      </div>
    </div>
  );
};

export default Navbar;

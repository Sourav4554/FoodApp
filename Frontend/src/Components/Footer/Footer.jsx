import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>FoodDrop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde sint qui incidunt similique temporibus!
                </p>
                <div className="footer-social-media-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy POlicy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7899</li>
                    <li>Contact-fooddrop@gmail.com</li>
       
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com-ALL Right Reserved</p>
    </div>
  )
}
export default Footer
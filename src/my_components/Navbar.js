import React, { useState } from 'react'

import "./navbar.css";

import { Link,NavLink } from "react-router-dom";
function Navbar() {
    // const [isDropDownOpen,setDropDownOpen] = useState(false);
    // const [isNavOpen, setNavOpen] = useState(false);
    // const dropDownChangeHandler = () => {
    //     setDropDownOpen(()=>(!isDropDownOpen));
    // }

    // const navChangeHandler = () =>{
    //     setNavOpen(()=>(!isNavOpen));
    // }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <img className="navbar__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8rVV0eF1tQjJ8YxPrB8FFF48I9FGMCrc7w&usqp=CAU" alt="logo"/>
                <Link to="/" className="navbar__title">AmeWeb</Link>
            </div>
            <div className='navbar__right'>
                <ul className="navbar__list">
                    <li className='navbar__listItem'>
                    <NavLink className="navbar__contact" to="/about">
                            About Us
                        </NavLink></li>
                   
                    <li className='navbar__listItem'><NavLink className="navbar__contact" to="/products">
                            Products
                        </NavLink></li>
                    <li className='navbar__listItem'><Link className="navbar__contact" to="/services">
                            Services
                        </Link></li>

                    <li className='navbar__listItem'>
                        <NavLink className="navbar__contact" to="/contact">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
          
        </div>
    )
}

export default Navbar
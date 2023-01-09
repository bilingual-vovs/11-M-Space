import React, { Component } from 'react';
import { Link } from "react-router-dom"
import logo from './Logo.svg'
import user from "./1.png"

import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="header-box">
                <div className="container">
                    <div className="flex-container">
                        <img className='head-logo' src={logo} alt="11-M Logo" />
                        <ul className="flex-nav">
                            <Link className="nav-link">Дім</Link>
                            <Link className="nav-link">Екіпаж</Link>
                            <Link className="nav-link">Контакти</Link>
                        </ul>
                        <div className="user-container">
                            <span className="user-name-heading">
                                Test User 
                            </span>
                            <img className='user-icon' src={user} alt="User avatar" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

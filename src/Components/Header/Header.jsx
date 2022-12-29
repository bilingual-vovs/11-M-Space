import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from './Logo.png'
import usrLogo from "./UserLogo.png"

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='inner-head'>
                        <img src={logo} alt="logo"/>
                        <div className='nav'>
                            <Link to="/" className='link'>Дім</Link>
                            <Link to="/members" className='link'>Екіпаж</Link>
                            <Link to="/contacts" className='link'>Контакти</Link>
                            <Link to="/about" className='link'>О нас</Link>
                        </div>
                        <div className='user'>
                            <h2>User Userov</h2>
                            <img src={usrLogo} alt="usrLogo"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Header;

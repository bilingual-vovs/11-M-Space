import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import logo from './Logo.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='inner-head'>
                        <img src={logo} alt="logo"/>
                        <div className='nav'>
                            <Link className='link'>Дім</Link>
                            <Link className='link'>Екіпаж</Link>
                            <Link className='link'>Контакти</Link>
                            <Link className='link'>О нас</Link>
                        </div>
                        <div className='user'>
                            <h2>User Userov</h2>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Header;
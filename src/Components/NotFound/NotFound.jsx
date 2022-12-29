import React, { Component } from 'react';
import Header from '../Header/Header';
import img from "./NotFound.png"
import "./NotFound.css"

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className='container'>
                    <h1>Зторінка не знайдена :(</h1>
                    <img className='not-img' src={img} alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;

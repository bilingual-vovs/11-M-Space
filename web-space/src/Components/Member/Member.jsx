import React, { Component } from 'react';
import { apiUrl, memberPath, imgPath } from "../../Settings"
import Header from '../Header/Header';
import "./Member.css"

class Member extends Component {
    state = {
        name: "",
        description: "",
        imgUrl: ''
    }

    componentDidMount = ()=>{
        fetch(apiUrl + memberPath + this.props.id)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    description: data.description,
                    imgUrl: apiUrl + imgPath(data.imgId)
                })
            })
            .catch(e => console.error(e))
    }
    render() {
        let {imgUrl, name, description} = this.state
        return (
            <React.Fragment>
                <Header/>
                <div className='member'>
                    <div className='container'>
                        <div className='line'>
                            <img alt={name} src={imgUrl}/>
                            <div className='spec-cont'>
                                <h1>{name}</h1>
                                <div className='spec'>

                                </div>
                            </div>
                            
                        </div>
                        <p className='description'>
                            {description}
                        </p>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Member;

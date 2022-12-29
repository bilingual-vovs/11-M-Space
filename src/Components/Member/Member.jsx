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
                    imgUrl: apiUrl + imgPath(data.imgId),
                    perf: data.perfomance
                })
            })
            .catch(e => {
                console.log(e)
                
            })
    }
    render() {
        let {imgUrl, name, description, perf} = this.state

        let perfsArr = []
        for (let key in perf){
            let {points, from, color, imgId} = perf[key]
            let style = {
                width: points/from*100 + "%",
                backgroundColor: color
            }
            perfsArr.push(
                <li key={key} className='part'>
                    <img className='ico' src={apiUrl + imgPath(imgId)} alt={key} />
                    <div className='hit-box'>
                        <span>{points}</span>
                        <div className='hit-bar'>
                            <div className='inner-bar' style={style}></div>
                        </div>
                    </div>
                    
                </li>
            )
        }

        return (
            <React.Fragment>
                <Header/>
                <div className='member'>
                    <div className='container'>
                        <div className='line'>
                            <img className='photo' alt={name} src={imgUrl}/>
                            <div className='spec-cont'>
                                <h1>{name}</h1>
                                <div className='spec'>
                                    <ul className='spec-column'>
                                        {perfsArr.slice(0, Math.ceil(perfsArr.length/2))}
                                    </ul>
                                    <ul className='spec-column'>
                                        {perfsArr.slice(Math.ceil(perfsArr.length/2), perfsArr.length)}
                                    </ul>
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

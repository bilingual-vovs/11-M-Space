import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {apiUrl, imgPath} from "../../Settings"
import Header from '../Header/Header';
import "./Members.css"

class Members extends Component {
    state = {
        members: []
    }

    componentDidMount = ()=>{
        fetch(apiUrl + "/members")
            .then(d => d.json())
            .then((d)=>{
                d.forEach(el => {
                    el.imgUrl = apiUrl + imgPath(el.imgId)
                });
                this.setState({members: d})
            })
    }
    render() {
        let buffer = [], data = []
        this.state.members.map((e, i) => {
            return (
            <Link className='member-link' to={"/members/"+i}>
                <li className='member-cart' id={'li' + i} key={"li" + i}>
                    <img alt={e.name} src={e.imgUrl}/>
                    <p>{e.name}</p>
                    </li>
            </Link>)
        }).forEach((el,i) => {
            if (buffer.length%3 === 0 && buffer.length !== 0 ){
                data.push(
                <div key={"div" + i} className='members-line'>
                    {buffer}
                </div>
                )
                buffer = []
            }
            else{
                buffer.push(el)
            }
        })
        data.push(
        <div key={"divn"} className='members-line'>
            {buffer}
        </div>
        )
        return (
            <React.Fragment>
                <Header/>
                <div className='members'>
                    <div className="container">
                        <ul>
                            {data}
                        </ul>
                        
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Members;

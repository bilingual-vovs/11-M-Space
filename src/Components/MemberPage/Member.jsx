import React, { Component } from 'react';
import { getMember, getImgUrl } from '../../Api';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import "./Member.css"

class Member extends Component {

    state = {
        appState: "loading",
        data: {}
    }

    componentDidMount = () => {
        getMember(this.props.id)
            .then(data => {
                this.setState({data, appState: "loaded"})
                console.log(data);
            })
            .catch(error => {
                this.setState({error, appState: "error"})
            })
    }

    render() {
        const { appState } = this.state
        const { description, imgId, perfomance, name, hobbies, skills } = this.state.data
        const inner = () => {
            switch (appState) {
                case "loading":
                    return <Loader className="loader"/>
                case "loaded":
                    const column1 = [], column2 = []
                    let i = 0
                    for (let key in perfomance){
                        let { points, imgId, color, from } = perfomance[key]

                        let style = {
                            width: points/from*100 + "%",
                            backgroundColor: color
                        }
                        const part = (
                        <li key={key} className='part'>
                            <img className='ico' src={getImgUrl(imgId)} alt={key} />
                            <div className='hit-box'>
                                <span>{points}</span>
                                <div className='hit-bar'>
                                    <div className='inner-bar' style={style}></div>
                                </div>
                            </div>
                        </li>)

                        if (i%2){
                            column1.push(part)
                        }
                        else {
                            column2.push(part)
                        }
                        i++
                    }

                    let skillsArr = false, hobbiesArr = false
                    if (hobbies.length){
                        hobbiesArr = hobbies.map((elm, i) => {
                            return (
                                <span key={"sh" + i} className="tag">
                                    {elm}
                                </span>
                            )
                        })
                    }

                    if (skills.length){
                        skillsArr = skills.map((elm, i) => {
                            return (
                                <span key={"sh" + i} className="tag">
                                    {elm}
                                </span>
                            )
                        })
                    }

                    return (
                    <React.Fragment>
                        <div className="character">
                        <img src={getImgUrl(imgId)} alt="character" className="character-photo" />
                        <h1 className="character-name">{name}</h1>
                        </div>
                        <div className="perfomance">
                            <ul className="perfomance-column">
                                {
                                  column1  
                                }
                            </ul>
                            <ul className="perfomance-column">
                                {
                                    column2
                                }
                            </ul>
                        </div>
                        <div className="description">
                            <span className="description-text">
                                { description || "Не було зпіймано жодного екземпляру для детального дослідження"}
                            </span>
                        </div>
                        <div className="two-column-container">
                            <div className="column left">
                                <h2 className="heading">Скіли: </h2>
                                { skillsArr || <span className='undefined'>Невиявлено</span>}
                            </div>
                            <div className="column right">
                                <h2 className="heading">Хоббі: </h2>
                                { hobbiesArr || <span className='undefined'>Невиявлено</span>}
                            </div>
                        </div>
                    </React.Fragment>
                )
                case 'error':
                    return `${this.state.error}`
            
                default:
                    return "State uncought"
            }
        }
        return (
            <div>
                <Header/>
                <div className="container">
                    {inner()}
                </div>
                
            </div>
        );
    }
}

export default Member;

import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css"
import MemberFunc from './Member/MemberFunc';
import Members from './Members/Members';

class App extends Component {
    render() {
        return (
            <div id='app'>
                <Router>
                    <Routes>
                        <Route exact path='/members' element={<Members/>}></Route>
                        <Route exact path='/members/:id' element={<MemberFunc/>}></Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;

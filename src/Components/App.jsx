import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"

import MemberFunc from './MemberPage/MemberFunc';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact element={<MemberFunc/>} path='/members/:id'></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;


import React, { Component } from 'react';
import { getMember } from '../../Api';

class Member extends Component {

    componentDidMount = () => {
        getMember(this.props.id)
            .then(console.log)
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <span></span>
            </div>
        );
    }
}

export default Member;

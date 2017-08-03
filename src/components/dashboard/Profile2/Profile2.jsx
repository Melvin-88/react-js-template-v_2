import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';
import DashboardContent from '../DashboardContent/DashboardContent';

class Profile2 extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        const { match } = this.props;
        this.baseUrl = match.url[match.url.length - 1] == '/' ? match.url : match.url + '/';
    }

    componentWillMount(){
    }


    render(){
        const { match, user } = this.props;
        return (
            <div className='1111'>
                2222222
            </div>
        );
    }
}

export default Profile2;

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';
import DashboardContent from '../DashboardContent/DashboardContent';

class Profile extends Component {

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
                <nav>
                    <hr/>
                    <Link to="/">home</Link><br/>
                    <Link to="/dashboard">dashboard</Link><br/>
                    <Link to="/dashboard/profile/edit">dashboard/profile/edit</Link><br/>
                    <hr/>
                    <NavLink to={`${ this.baseUrl }email/`}>email</NavLink><br/>
                    <NavLink to={`${ this.baseUrl }address/`}>address</NavLink><br/>
                    <hr/>
                </nav>
                    <Route
                        path={ this.baseUrl }
                        exact
                        render={() => {
                            return (
                                <div>baseUrl 111111111111</div>
                            )
                        }}
                    />

                    <Route
                        path={ `${this.baseUrl}email/` }
                        exact
                        render={() => {
                            return (
                                <div>email/ 111111111111</div>
                            )
                        }}
                    />

                    <Route
                        path={ `${this.baseUrl}address/` }
                        exact
                        render={() => {
                            return (
                                <div>address/ 111111111111</div>
                            )
                        }}
                    />
            </div>
        );
    }
}

export default Profile;

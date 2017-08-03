import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Profile2 from '../Profile2/Profile2';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { };
        const { match } = this.props;
        this.baseUrl = match.url[match.url.length - 1] == '/' ? match.url : match.url + '/';
    }

    componentWillMount(){
        console.log(this.baseUrl);
    }


    render(){
        const { match } = this.props;
        return (
            <div className='Dashboard'>
                <Route
                    path={ this.baseUrl }
                    exact
                    render={() => {
                        return (
                            <div>
                                <div>baseUrl Dashboard</div>
                                <Link to="/dashboard/main">main</Link><br/>
                                <Link to="/dashboard/profile/edit">dashboard/profile/edit</Link><br/>
                            </div>
                        )
                    }}
                />
                <Route path={`${match.url}/profile/edit`} component={Profile2}/>
                <Route path={`${match.url}/main`} component={Profile}/>
            </div>
        );
    }
}


export default Dashboard;

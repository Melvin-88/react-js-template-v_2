import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Dashboard extends Component {

    componentWillMount(){
    }

    render(){
        const { match, user } = this.props;
        return (
            <div className=''>
                <h3>dashboard</h3>
                <Link to={`${match.url}/rendering`}>
                    rendering
                </Link>
                <br/>
                <Link to={`${match.url}/profile`}>
                    profile
                </Link>
                <Route path={`${match.url}/:topicId`} component={Topic}/>
            </div>
        );
    }
}

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
        <br/>
        <p>Loreipsum</p>
    </div>
);

export default Dashboard;

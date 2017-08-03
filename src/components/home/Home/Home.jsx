import React, { Component } from 'react';
import {
    fetchUser
} from '../../../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom'


class Home extends Component {
    state = {
        dirty : '111'
    };

    componentWillMount(){
        this.props.fetchUser()
    }
    componentDidMount(){
    }

    // componentWillReceiveProps(newProps){
    //   const { match, user } = newProps;
    //   if (match.path == '/reset/:uid/:token') {
    //     this._toggleAuthModal({type: 'newpassword'});
    //   }
    // }

    render(){
        // const { showModal } = this.state;
        const { match, user } = this.props;
        console.log(this.props.user.blangs.results, match.url);
        return (
            <div className=''>
                <div>main Page</div>
                <br/>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/dashboard">Dashboard</Link>
                <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

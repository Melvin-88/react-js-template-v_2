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
    NavLink
} from 'react-router-dom'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentWillMount(){
        this.props.fetchUser()
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
              <Router>
                <div>
                  <h2>Accounts</h2>
                    <nav>
                      <ul>
                        <li><NavLink activeClassName={'active'} to="/netflix">Netflix</NavLink></li>
                        <li><NavLink to="/zillow-group">Zillow Group</NavLink></li>
                        <li><NavLink to="/yahoo">Yahoo</NavLink></li>
                        <li><NavLink to="/modus-create">Modus Create</NavLink></li>
                      </ul>
                    </nav>
                    <hr/>
                  <Route path="/" component={Child}/>
                  <Route path="/:id" component={Child}/>
                </div>
              </Router>
            </div>
        );
    }
}

const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
)

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

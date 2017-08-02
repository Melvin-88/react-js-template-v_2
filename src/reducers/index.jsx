import { combineReducers } from "redux";
import UserReducer from './reducerUser';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    router: routerReducer,
    user: UserReducer
});

export default rootReducer;

import * as types from "../actions/actionTypes";

const INITIAL_STATE = {blangs: {}};

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case types.BLANGS_SUCCESS:
            return {...state, blangs : action.payload.data};
    }
    return state;
}
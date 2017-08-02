import * as types from './actionTypes.jsx';

export function fetchUser() {
    return {
        type: types.BLANGS,
        payload: {
            request: {
                url: `/v0/client/blangs/`,
                method: "get"
            }
        }
    };
}
import {FETCH_USERS, SET_SINGLE_USER} from '../action/index';

const INITIAL_STATE = { all: [], user: null};

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_USERS:
            return {...state, all: action.payload.data};
        case SET_SINGLE_USER:
            return{...state, user: action.payload};
        default:
            return state;
    }
}
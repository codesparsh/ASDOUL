
import * as ActionTypes from './actionTypes';

export const allApps = (state = { apps: [],isLoading:true }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_APPS:
            return { ...state,isLoading:false, apps: action.payload };
        case ActionTypes.APP_LOADING:
            return { ...state,isLoading:true, apps:[]};    
        default:
            return state;
    }
}
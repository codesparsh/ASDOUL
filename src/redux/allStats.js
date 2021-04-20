
import * as ActionTypes from './actionTypes';

export const allStats = (state = { stats:[],isLoading:true }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STATS:
            return { ...state,isLoading:false, stats: action.payload};
            case ActionTypes.STAT_LOADING:
                return { ...state,isLoading:true, stats:[]};
        default:
            return state;
    }
}
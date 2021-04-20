import * as ActionTypes from './actionTypes';

const addApps = (apps)=>{
    return{
        type: ActionTypes.ADD_APPS,
        payload:apps
    }
}

export const fetchApp = () => (dispatch) => {    
    dispatch(appLoading(true));

    return fetch('https://api.npoint.io/adf6676a313fa01f787d')
    .then(response => response.json())
    .then(app => dispatch(addApps(app)));
};

export const appLoading = ()=>({
    type:ActionTypes.APP_LOADING
})


const addStats = (stats)=>{
    return{
        type: ActionTypes.ADD_STATS,
        payload:stats
    }
}

export const fetchStat = () => (dispatch) => {    
    dispatch(statLoading(true));

    return fetch('https://api.npoint.io/baf8dba5974d29aa094b')
    .then(response => response.json())
    .then(stats => dispatch(addStats(stats)));
};

export const statLoading = ()=>({
    type:ActionTypes.STAT_LOADING
})
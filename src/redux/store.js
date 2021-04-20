import { createStore,applyMiddleware, combineReducers} from 'redux';
import { allApps} from './allApps'
import { allStats} from './allStats'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
 
export const Store = () => {
    const store = createStore(
        combineReducers({
            allApps,
            allStats
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
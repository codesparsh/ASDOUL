import { GET_FEATURES, GET_FEATURES_SUCCESS } from "./actionCreators";


export const allFeatures = (state = {
    features: [],
    isLoading: false
  }, action) => {
  switch (action.type) {
    case GET_FEATURES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case GET_FEATURES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        featues: action.features
      });
    default:
      return state;
  }
};



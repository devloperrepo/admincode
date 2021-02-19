import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import dashReducer from "./dash.reducer";

const reducers = {
    authReducer,
    userReducer,
    dashReducer,
    // form: formReducer
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {

    
    if (action.type === "USER_LOGGED_OUT_SUCCESS") {
        // console.log(state.userReducer);
        state = {
            dashReducer: state.dashReducer,
            userReducer : {
                getLocation: state.userReducer.getLocation
            }
        }
    }


    return appReducer(state, action);
}

export default rootReducer;

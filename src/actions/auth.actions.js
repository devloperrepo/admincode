import {fetchApi} from "../service/api";


export const loginUser = (payload) => {
    return async (dispatch) => {
        payload.by_method="mobile";
        
        try {
          dispatch({
            type: "LOGIN_LOADING"
          });
          const response = await fetchApi("auth/login", "POST", payload, 200);
          
          if(response.responseBody && response.responseBody.status == 1) {
            dispatch({
                type: "LOGIN_SUCCESS",
            });
            
            dispatch({
                type: "AUTH_USER_SUCCESS",
                token: response.responseBody.data.token,
                user_details: response.responseBody.data,
            });
            dispatch({
                type: "GET_USER_SUCCESS",
                payload: response.responseBody.data
            });
            return response.responseBody;
          } else {
            dispatch({
                type: "LOGIN_FAIL",
                payload: response.responseBody
            });
            return response.responseBody;
          }

        } catch (error) {
            dispatch({
                type: "LOGIN_FAIL",
                payload: error.responseBody
            });
            return error;
        }
    }
}

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const {authReducer: {authData: {token}}} = state;
            //console.log(token);
            const response = await fetchApi("auth/logout", "DELETE", null, 200, token);
            //console.log(response);
            dispatch({
                type: "USER_LOGGED_OUT_SUCCESS"
            });
        } catch (e) {
            console.log(e);
        }
    }
}

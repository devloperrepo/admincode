import {fetchApi} from "../service/api";
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';


export const updateLanguage = (payload) => {
  return async (dispatch) => {
      
      try {
        dispatch({
          type: "UP_LANGUAGE_LOADING"
        });
        const response = await fetchApi("getLangData", "POST", payload, 200, payload.token);
        
        if(response.responseBody && response.responseBody.status == 1) {
          dispatch({
              type: "UP_LANGUAGE_SUCCESS",
              payload: response.responseBody.data
          });
          
          return response.responseBody;
        } else {
          dispatch({
              type: "UP_LANGUAGE_FAIL",
              payload: response.responseBody
          });
          return response.responseBody;
        }

      } catch (error) {
          dispatch({
              type: "UP_LANGUAGE_FAIL",
              payload: error.responseBody
          });
          return error;
      }
  }
}

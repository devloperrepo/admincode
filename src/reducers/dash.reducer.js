import { combineReducers } from 'redux';

const updateLanguage = (state = {}, action) => {
  switch (action.type) {

    case "UP_LANGUAGE_LOADING":
        return {
          isLoading: true,
          isError: false,
          isSuccess: false,
          errors: null,
          lang: null,
        }

    case "UP_LANGUAGE_SUCCESS":
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
          errors: null,
          lang: action.payload,
        }

    case "UP_LANGUAGE_FAIL":
        return {
          isLoading: false,
          isError: true,
          isSuccess: false,
          errors: action.payload,
          lang: null,
        }
    default:
      return state;
  }
}

export default combineReducers({
   updateLanguage
});

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  error: null,
  isAuthenticated: false,
  isAdmin: false,
  userId: null,
  signupDone:false,
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    isAdmin: action.isAdmin,
    isAuthenticated: true,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const authLogout = (state, action) => {
  return {
    token: null,
    error: null,
    isAuthenticated: false,
    isAdmin: false,
    userId: null,
  };
};

const authSignupDone=(state,action)=>{
    return{
        ...state,
        signupDone:true,
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.USER_AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.USER_AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.USER_AUTH_SIGNUPDONE:
        return 
    default:
      return state;
  }
};

export default reducer;

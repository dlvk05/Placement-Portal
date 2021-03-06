import * as actionTypes from "../actions/actionTypes";

const initialState = {
  // token: null,
  error: null,
  isAuthenticated: false,
  isAdmin: false,
  userId: null,
  signupDone:false,
  profileId:null,
};

const authErrorReset=(state,actions)=>{
  return{
    ...state,
    error:null,
  }
}

const authSuccess = (state, action) => {
  return {
    ...state,
    error:null,
    // token: action.idToken,
    userId: action.userId,
    isAdmin: action.isAdmin,
    isAuthenticated: true,
    profileId:action.profileId,
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
    ...state,
    // token: null,
    error: null,
    isAuthenticated: false,
    isAdmin: false,
    userId: null,
    profileId:null,
  };
};

const authSignupDone=(state,action)=>{
    return{
        ...state,
        error:null,
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
        return authSignupDone(state, action);
    case actionTypes.USER_AUTH_ERROR_RESET:
        return authErrorReset(state,action);
    default:
      return state;
  }
};

export default reducer;

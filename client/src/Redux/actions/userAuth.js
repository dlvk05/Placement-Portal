import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../Utils/setAuthToken";
import * as actionTypes from "./actionTypes";

export const authSuccess = (token, userId,isAdmin) => {
  return {
    type: actionTypes.USER_AUTH_SUCCESS,
    idToken: token,
    userId: userId,
    isAdmin:isAdmin,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.USER_AUTH_FAIL,
    error: error,
  };
};

export const signupDone=()=>{
    return{
        type: actionTypes.USER_AUTH_SIGNUPDONE,
    }
}

export const logout = () => {
  //remove data in local storage
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("isAdmin");
  //remove axios header
  setAuthToken();
  return {
    type: actionTypes.USER_AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

//des this action SignsUp the user
export const userSignup = (userData) => {
  return (dispatch) => {
    let url = "/api/signupUser";
    axios
      .post(url, userData)
      .then((response) => {
        console.log(response);
        dispatch(signupDone());
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

//des this action logsIn the user
export const userLogin = (email, password) => {
  return (dispatch) => {
    // dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url = "/api/loginUser";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        if (!response.token) {
          dispatch(authFail("error"));
        } else {
          const { token } = response.data.token;
          // Decode token to get user data
          const decoded = jwt_decode(token);
          //create expirationDate using the expires in payload
          const expirationDate = new Date(
            new Date().getTime() + decoded.expiresIn * 1000
          );
          //store data in local storage
          localStorage.setItem("token", token);
          localStorage.setItem("expirationDate", expirationDate);
          localStorage.setItem("userId", decoded.id);
          localStorage.setItem("isAdmin", decoded.isAdmin);
          //set axios header
          setAuthToken(token);

          dispatch(authSuccess(token, decoded.id));
          dispatch(checkAuthTimeout(decoded.expiresIn));
        }
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        const isAdmin = localStorage.getItem("isAdmin");
        setAuthToken(token);
        dispatch(authSuccess(token, userId,isAdmin));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

import { authAPI } from "../api/api";

const SET_USER = "SET_USER";
const LOG_IN = "LOG_IN";
const SET_AUTH = "SET_AUTH";

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER: {
      return {
        isAuth: action.isAuth,
        email: action.email,
      };
    }
    case LOG_IN: {
      return {
        isAuth: action.isAuth,
        email: action.email,
      };
    }
    case SET_AUTH: {
      return {
        isAuth: action.isAuth,
      };
    }
    default:
      return state;
  }
};

export const setUser = (isAuth = true) => ({
  type: SET_USER,
  isAuth,
});
export const logoutUser = (isAuth = false) => ({
  type: SET_USER,
  isAuth,
});

export const login = (email: string, password: string) => (dispatch: any) => {
  authAPI
    .login(email, password)
    .then((response: any) => {
      
    })
    .catch((error: any) => console.log(error));
};

export const registration = (email: string, password: string) => (dispatch: any) => {
  authAPI
    .registration(email, password)
    .then((response: any) => console.log("registration"))
    .catch((error: any) => console.log(error));
};

export const logout = () => (dispatch: any) => {
  authAPI.logout().then(dispatch(logoutUser()));
};

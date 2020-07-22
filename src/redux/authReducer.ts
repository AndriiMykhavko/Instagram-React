import { authAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
  isAuth: false,
  email: ''
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_AUTH: {
      return {
        isAuth: action.isAuth,
        email: action.email
      };
    }
    default:
      return state;
  }
};

export const logInUser = (email: string, isAuth = true) => ({
  type: SET_USER_AUTH,
  isAuth,
  email
});
export const logoutUser = (email = '', isAuth = false) => ({
  type: SET_USER_AUTH,
  isAuth,
  email,
});

export const login = (email: string, password: string) => (dispatch: any) => {
  authAPI
    .login(email, password)
    .then((response: any) => {
      //console.log(response)
      if(response.user.email.length !== 0) {
        // dispatch(logInUser())
      }
    })
    .catch((error: any) => alert(error));
};

export const registration = (email: string, password: string) => (dispatch: any) => {
  authAPI
    .registration(email, password)
    .then((response: any) => {
      if(response.user.email.length !== 0) {
        // dispatch(logInUser())
      }
      console.log(response)
    })
    .catch((error: any) => alert(error));
};

export const googleAuth = () => {
  authAPI
  .googleAuth()
  .then( (response: any) => console.log(response))
}

export const logout = () => (dispatch: any) => {
  authAPI.logout().then(dispatch(logoutUser()));
};

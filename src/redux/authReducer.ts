import { authAPI } from "../api/api";

const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
  isAuth: false,
  name: ''
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_AUTH: {
      return {
        isAuth: action.isAuth,
        name: action.displayName
      };
    }
    default:
      return state;
  }
};

export const logInUser = (displayName: string, isAuth = true) => ({
  type: SET_USER_AUTH,
  isAuth,
  displayName
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

export const registration = ( name: string, email: string, password: string) => (dispatch: any) => {
  authAPI
    .registration(email, password)
    .then((response: any) => {
      if(response.user) {
        response.user.updateProfile({
          displayName: name,
        })
      }
      // console.log(response)
      // debugger
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

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "./authReducer";
import { postsReducer } from "./posts/index";

let reducers = combineReducers({
  auth: authReducer,
  postsPage: postsReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

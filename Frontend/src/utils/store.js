import { configureStore } from "redux";
import usersReducer from "../features/users";

const reducer = combineReducers({
  users: usersReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore(reduxDevtools);

export default store;

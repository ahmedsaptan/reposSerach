import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  repoReducer,
  repoTitle,
  reposCount,
  pageNumber,
} from "./reducers/repoReducers";

const reducers = combineReducers({
  repoList: repoReducer,
  repoTitle: repoTitle,
  reposCount: reposCount,
  pageNumber: pageNumber,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

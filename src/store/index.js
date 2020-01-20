import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { clientAxios, serverAxios } from "./request";
import { createServerRequest } from "../server/request";
import { reducer as homeReducer } from "../containers/Home/store/";
import { reducer as headerReducer } from "../components/Header/store/";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
});

export function createClientStore() {
  return createStore(
    reducer,
    window.__ROUTE_DATA__, // default data
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
}

export function createServerStore(req, res) {
  const request = createServerRequest(req);
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(request))
  );
}

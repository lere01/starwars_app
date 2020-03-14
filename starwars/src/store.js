import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./Reducers/rootReducer";

const loggerMiddleware = createLogger();
const enhancers = [];
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(RootReducer, composeEnhancers);

export default store;

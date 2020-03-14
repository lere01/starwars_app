import { combineReducers } from "redux";
import UpdateReducer from "./updateReducer";
import GetDetail from "./getSingleDetail";

const rootReducer = combineReducers({
  UpdateReducer,
  GetDetail
});

export default rootReducer;

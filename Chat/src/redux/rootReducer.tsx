import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/App";
// slices

const rootPresistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: ['settings'],
  // blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPresistConfig, rootReducer };

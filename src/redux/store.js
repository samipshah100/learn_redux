import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
// const store = createStore(restaurant)

export default store;

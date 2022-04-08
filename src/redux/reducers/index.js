import { combineReducers } from "redux";
import reducer from "./mainPageReducer";

const rootReducer = combineReducers({
    // ,
    mainPage: reducer,

})

export default rootReducer;
import { combineReducers } from "redux";
import {reducer} from "./mainPageReducer";
import {dailyForecastReducer} from './dailyForecastReducer'
import currentConditionsReducer from './currentConditionsReducer';

const rootReducer = combineReducers({
    currentConditionsReducer,
    dailyForecastReducer,
    mainPage: reducer,
})

export default rootReducer;
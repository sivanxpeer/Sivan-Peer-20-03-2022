import { combineReducers } from "redux";
import {reducer} from "./mainPageReducer";
import {dailyForecastReducer} from './dailyForecastReducer'
import currentConditionsReducer from './currentConditionsReducer';
import {favoritesReducer} from './mainPageReducer';

const rootReducer = combineReducers({
    currentConditionsReducer,
    dailyForecastReducer,
    mainPage: reducer,
    favoritesReducer,
})

export default rootReducer;
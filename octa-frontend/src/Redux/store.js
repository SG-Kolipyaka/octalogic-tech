
import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import {thunk} from "redux-thunk"
import { reducer as vehiclereducer } from "./VehicleReducer/reducer"

const rootReducer=combineReducers({
    vehiclereducer

})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk)) 
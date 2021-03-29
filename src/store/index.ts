import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {weatherReducer} from "./redusers/weatherReducer";
import {alertReducer} from "./redusers/alertReducer";

const rootReducer =combineReducers({
    weatherReducer,
    alertReducer
})

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof  rootReducer>
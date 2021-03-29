import {AlertAction, AlertState,AlertActionTypes} from "../types/alertTypes";

const initialState:AlertState = {
    message:''
}

export const alertReducer = (state = initialState, action:AlertAction):AlertState =>{
    switch (action.type) {
        case AlertActionTypes.SET_ALERT:
            return {message:action.payload}
        default:
            return state
    }
}
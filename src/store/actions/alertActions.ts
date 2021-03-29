import {AlertAction, AlertActionTypes} from "../types/alertTypes";

export const setAlert = (message:string):AlertAction =>{
    return {
        type:AlertActionTypes.SET_ALERT,
        payload:message
    }
}
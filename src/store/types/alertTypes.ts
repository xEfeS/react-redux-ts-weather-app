export enum AlertActionTypes {
    SET_ALERT = 'SET_ALERT'
}

export interface AlertAction {
    type:AlertActionTypes.SET_ALERT,
    payload:string,
}

export interface AlertState {
    message:string
}

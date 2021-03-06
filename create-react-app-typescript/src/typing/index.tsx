import { Dispatch, Store } from "redux";

export interface TypeAction {
  type: string;
  payload: any;
}

export interface TypeObject {
  [propName: string]: any;
}

export interface TypeThunkObject {
  (dispatch: Dispatch, getState: Store["getState"]): any;
}

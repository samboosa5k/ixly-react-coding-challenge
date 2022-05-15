import { IAppState } from './types';

export enum AppStateActions {
  INIT_APP_STATE,
  UPDATE_APP_STATE,
  LOAD_SESSION_DATA,
  // SAVE_SESSION_DATA,
  CLEAR_SESSION_DATA,
  SET_STATE_ERRORS
}

type InitStateAction = {
  type: AppStateActions.INIT_APP_STATE;
  payload: IAppState;
};

type UpdateStateAction = {
  type: AppStateActions.UPDATE_APP_STATE;
  payload: Partial<IAppState>;
};

type LoadSessionDataAction = {
  type: AppStateActions.LOAD_SESSION_DATA;
  payload: Partial<IAppState>;
};

// type SaveSessionDataAction = {
//   type: AppStateActions.SAVE_SESSION_DATA;
//   payload: Partial<IAppState>;
// };

type ClearSessionDataAction = {
  type: AppStateActions.CLEAR_SESSION_DATA;
  payload: Partial<IAppState>;
};

type SetStateErrorsAction = {
  type: AppStateActions.SET_STATE_ERRORS;
  payload: Partial<IAppState>;
};

export type AppStateDispatchActions =
  | InitStateAction
  | UpdateStateAction
  | LoadSessionDataAction
  // | SaveSessionDataAction
  | ClearSessionDataAction
  | SetStateErrorsAction;

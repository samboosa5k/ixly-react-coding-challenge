import { IAppState } from './types';

export enum AppStateActions {
  INIT_APP_STATE,
  UPDATE_APP_STATE,
  LOAD_SESSION_DATA,
  LOAD_IMAGE_FETCH_DATA,
  CLEAR_SESSION_DATA,
  SET_STATE_ERRORS,
  TOGGLE_MODAL
}

type InitStateAction = {
  type: AppStateActions.INIT_APP_STATE;
  // payload: IAppState;
};

type UpdateStateAction = {
  type: AppStateActions.UPDATE_APP_STATE;
  payload: Partial<IAppState>;
};

type LoadSessionDataAction = {
  type: AppStateActions.LOAD_SESSION_DATA;
  payload: ImageProps[];
};

type LoadImageFetchDataAction = {
  type: AppStateActions.LOAD_IMAGE_FETCH_DATA;
  payload: ImageProps[];
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

type ToggleModalAction = {
  type: AppStateActions.TOGGLE_MODAL;
  payload: ImageProps;
};

export type AppStateDispatchActions =
  | InitStateAction
  | UpdateStateAction
  | LoadSessionDataAction
  | LoadImageFetchDataAction
  | ClearSessionDataAction
  | SetStateErrorsAction
  | ToggleModalAction;

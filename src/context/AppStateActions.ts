import { IAppState } from './types';

export enum AppStateActions {
  INIT_APP_STATE,
  LOAD_SESSION_DATA,
  LOAD_IMAGE_FETCH_DATA,
  CLEAR_SESSION_DATA,
  TOGGLE_MODAL
}

type InitStateAction = {
  type: AppStateActions.INIT_APP_STATE;
};

type LoadSessionDataAction = {
  type: AppStateActions.LOAD_SESSION_DATA;
  payload: ImageProps[];
};

type LoadImageFetchDataAction = {
  type: AppStateActions.LOAD_IMAGE_FETCH_DATA;
  payload: ImageProps[];
};

type ClearSessionDataAction = {
  type: AppStateActions.CLEAR_SESSION_DATA;
  payload: Partial<IAppState>;
};

type ToggleModalAction = {
  type: AppStateActions.TOGGLE_MODAL;
  payload: ImageProps;
};

export type AppStateDispatchActions =
  | InitStateAction
  | LoadSessionDataAction
  | LoadImageFetchDataAction
  | ClearSessionDataAction
  | ToggleModalAction;

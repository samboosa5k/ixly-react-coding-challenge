import { IAppState } from './types';
import { AppStateActions, AppStateDispatchActions } from './AppStateActions';

// Definition for the reducer
type AppStateReducer = (
  state: IAppState,
  action: AppStateDispatchActions
) => IAppState;

// Reducer for the AppState
export const appStateReducer: AppStateReducer = (
  state: IAppState,
  action: AppStateDispatchActions
) => {
  switch (action.type) {
    case AppStateActions.INIT_APP_STATE:
      return { ...state, ...action.payload };
    case AppStateActions.UPDATE_APP_STATE:
      return { ...state, ...action.payload };
    case AppStateActions.LOAD_SESSION_DATA:
      return { ...state, ...action.payload };
    case AppStateActions.CLEAR_SESSION_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

import { AppStateActions, AppStateDispatchActions } from './AppStateActions';
import { IAppState } from './types';

// Definition for the reducer
type AppStateReducer = (state: IAppState, action: AppStateDispatchActions) => IAppState;

// Reducer for the AppState
export const appStateReducer: AppStateReducer = (
  state: IAppState,
  action: AppStateDispatchActions
) => {
  switch (action.type) {
    case AppStateActions.INIT_APP_STATE:
      return {
        ...state,
        init: true
      };
    case AppStateActions.LOAD_SESSION_DATA:
      return {
        ...state,
        api: {
          ...state.api,
          dataList: [...state.api.dataList, ...action.payload]
        }
      };
    case AppStateActions.LOAD_IMAGE_FETCH_DATA:
      return {
        ...state,
        api: {
          ...state.api,
          dataList: [...state.api.dataList, ...action.payload]
        }
      };
    case AppStateActions.TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          open: state.modal.open ? false : true,
          data: action.payload
        }
      };
    case AppStateActions.CLEAR_SESSION_DATA:
      return { ...state };
    default:
      return state;
  }
};

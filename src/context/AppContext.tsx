import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from 'react';
import { AppStateDispatchActions } from './AppStateActions';
import { appStateReducer } from './AppStateReducer';
import { initialAppState } from './initialAppState';
import { IAppState } from './types';

interface IAppContext {
  appState: IAppState;
  dispatch: Dispatch<AppStateDispatchActions>;
}

// Context setup & Hook
const AppContext = createContext<IAppContext>({
  appState: initialAppState,
  dispatch: () => initialAppState
});

export const useAppState = () => {
  return useContext(AppContext);
};

// App State Provider
const AppStateProvider = (children: ReactNode) => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  // useEffect(() => {
  //   dispatch({
  //     type: AppStateActions.SET_LOADED_CLIENTS,
  //     payload: API_RESULTS
  //   });
  // }, []);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;

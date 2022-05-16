import {
  createContext,
  Dispatch,
  ReactNode,
  ReactPortal,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { AppStateActions, AppStateDispatchActions } from './AppStateActions';
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
interface IAppStateProviderProps {
  children: ReactNode | ReactPortal;
}

const AppStateProvider = ({ children }: IAppStateProviderProps) => {
  const [appState, dispatch] = useReducer(appStateReducer, initialAppState);

  useEffect(() => {
    dispatch({
      type: AppStateActions.INIT_APP_STATE
    });
  }, []);

  return <AppContext.Provider value={{ appState, dispatch }}>{children}</AppContext.Provider>;
};
export default AppStateProvider;

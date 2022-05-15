import { IAppState } from './types';

export const initialAppState: IAppState = {
  app: {
    loading: false,
    loaded: false,
    errors: []
  },
  api: {
    connecting: false,
    connected: false,
    errors: [],
    dataList: [],
    fetchCount: 0
  },
  session: {
    new: false,
    restored: false,
    sessionData: []
  }
};

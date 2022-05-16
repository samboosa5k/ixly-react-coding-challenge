import { IAppState } from './types';

export const initialAppState: IAppState = {
  init: false,
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
  },
  modal: {
    open: false,
    data: null
  }
};

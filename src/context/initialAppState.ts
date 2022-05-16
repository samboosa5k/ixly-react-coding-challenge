import { IAppState } from './types';

export const initialAppState: IAppState = {
  init: false,
  api: {
    dataList: []
  },
  modal: {
    open: false,
    data: null
  }
};

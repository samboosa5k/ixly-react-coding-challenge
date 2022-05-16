export interface IAppState {
  init: boolean;
  api: {
    dataList: ImageProps[];
  };
  modal: {
    open: boolean;
    data: ImageProps | null;
  };
}

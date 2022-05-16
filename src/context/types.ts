export interface IAppState {
  init: boolean;
  api: {
    connecting: boolean;
    connected: boolean;
    errors: string[];
    dataList: ImageProps[] | [];
    fetchCount: number;
  };
  session: {
    new: boolean;
    restored: boolean;
    sessionData: ImageProps[] | [];
  };
  modal: {
    open: boolean;
    data: ImageProps | null;
  };
}

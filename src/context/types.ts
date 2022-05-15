export interface IAppState {
  app: {
    loading: boolean;
    loaded: boolean;
    errors: string[];
  };
  api: {
    connecting: boolean;
    connected: boolean;
    errors: string[];
    dataList: any[];
    fetchCount: number;
  };
  session: {
    new: boolean;
    restored: boolean;
    sessionData: any[];
  };
}

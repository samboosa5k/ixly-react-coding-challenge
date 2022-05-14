interface IGlobalState {
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
  };
  session: {
    existing: boolean;
    restored: boolean;
    sessionData: any[];
  };
}

export {};

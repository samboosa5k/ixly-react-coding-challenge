import React, { useEffect, useState } from 'react';
import AppStateProvider, { useAppState } from '../../context/AppContext';
import Grid from '../Grid';
import { Button as LoadMore } from '../Button/Button';
import { Query } from '../Query/Query';

import { AppContainer } from './App.style';

export const App = () => {
  const { appState } = useAppState();
  const [page, setPage] = useState<number>(1);

  const loadMore = () => {
    setPage((prevPage: number) => prevPage + 1);
  };

  return (
    <AppContainer>
      <Query page={page} apiKey={'WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk'}>
        <Grid />
      </Query>
      <LoadMore onClick={loadMore} />
    </AppContainer>
  );
};

export default App;
// return <Grid loadedData={data} />;

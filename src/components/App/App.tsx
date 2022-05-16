import React, { useState } from 'react';
import { Button as LoadMore } from '../Button/Button';
import Grid from '../Grid';
import { Query } from '../Query/Query';

import { AppContainer } from './App.style';

export const App = () => {
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

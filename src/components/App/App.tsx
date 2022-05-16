import React from 'react';
import Grid from '../Grid';

import { AppContainer } from './App.style';
import { useQuery } from './hooks';

export const App = () => {
  const { data, error } = useQuery();

  return (
    <AppContainer id={'App'}>
      {/*<Query page={1} apiKey={'WQjDDCPBDixElpsgYDvGCNqsgHlxPtY63HICRmOrOsk'}>*/}
      {/*  {({ data }) => {*/}
      {/*<Grid loadedData={data} />*/}
      {/*  }}*/}
      {/*</Query>*/}
    </AppContainer>
  );
};

export default App;
// return <Grid loadedData={data} />;

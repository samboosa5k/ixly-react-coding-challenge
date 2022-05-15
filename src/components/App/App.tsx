import React from 'react';
import Grid from '../Grid';
import { Query } from '../Query/Query';

import { AppContainer } from './App.style';

export const App = () => {
  return (
    <AppContainer id={'App'}>
      <Query>
        {({ data }) => {
          return <Grid loadedData={data} />;
        }}
      </Query>
    </AppContainer>
  );
};

export default App;
// return <Grid loadedData={data} />;

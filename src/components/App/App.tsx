import React from 'react';
import Grid from '../Grid';

import { AppContainer } from './App.style';

export const App = () => (
  <AppContainer id={'App'}>
    <header>
      <h1>Fast Food Gallery</h1>
    </header>
    <Grid
      urls={[
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www',
        'www'
      ]}></Grid>
  </AppContainer>
);

export default App;

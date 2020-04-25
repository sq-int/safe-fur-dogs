import React from 'react';
import { Route } from 'react-router-dom';

/* styles */
import { Container } from './styles/global/structure';

/* components */
import SearchView from './components/SearchView';
import Food from './components/Food';

function App() {

  return (
    <Container>
      <Route exact path="/">
        <SearchView />
      </Route>
      <Route path="/:food">
        <Food />
      </Route>
    </Container>
  );
}

export default App;

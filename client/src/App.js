import React from 'react';
import { Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

/* styles */
import { Container } from './styles/global/structure';

/* components */
import SearchView from './components/SearchView';
import Food from './components/Food';

function App() {

  /* react-spring */
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container style={props}>
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

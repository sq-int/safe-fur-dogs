import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

/* styles */
import { Container } from './styles/global/structure';

/* components */
import SearchView from './components/SearchView';
import Food from './components/Food';
import Header from './components/structure/Header';
import FoodList from './components/FoodList';
import Contact from './components/Contact';
import Footer from './components/structure/Footer';

function App() {

  /* react-spring */
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container style={props}>
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchView />
        </Route>
        <Route exact path="/food">
          <FoodList />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/:food">
          <Food />
        </Route>
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;

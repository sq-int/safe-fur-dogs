import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSpring } from 'react-spring';

/* styles */
import { Container } from './styles/global/structure';

/* components */
import SearchView from './components/SearchView';
import Food from './components/Food';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import Build from './components/structure/Build';
import Submit from './components/structure/Submit';
import PrivateRoute from './components/structure/PrivateRoute';

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
        <Route exact path="/:food">
          <Food />
        </Route>
        <Route path={process.env.REACT_APP_BUILD}>
          <Build />
        </Route>

        <PrivateRoute exact path={process.env.REACT_APP_FOOD} component={Submit} />
      </Switch>

      <Footer />
    </Container>
  );
}

export default App;

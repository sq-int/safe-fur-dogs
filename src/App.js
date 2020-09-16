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
import PrivacyPolicy from './components/docs/PrivacyPolicy';
import TermsOfService from './components/docs/TermsOfService';
import About from './components/About';
import Suggested from './components/Suggested';
import AddFood from './components/AddFood';

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


        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/terms-of-service">
          <TermsOfService />
        </Route>
        <Route exact path="/add-food">
          <AddFood />
        </Route>


        <Route path="/suggestions/:food">
          <Suggested />
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

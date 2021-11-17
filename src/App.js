import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;

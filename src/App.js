import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Board from './components/Board';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/boards/:id'>
            <Board />
          </Route>
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

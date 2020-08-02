import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import BoardState from './context/boards/BoardState';
import ListState from './context/lists/ListState';
import Header from './components/Header';
import Home from './pages/Home';
import Board from './components/Board';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='home'>
        <BoardState>
          <ListState>
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
          </ListState>
        </BoardState>
      </div>
      <Footer />
    </div>
  );
}

export default App;

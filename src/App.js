import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AppWrapper from './AppWrapper';
import BoardState from './context/boards/BoardState';
import ListState from './context/lists/ListState';
import CardContext from './context/cards/CardState';
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
            <CardContext>
              <AppWrapper>
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
              </AppWrapper>
            </CardContext>
          </ListState>
        </BoardState>
      </div>
      <Footer />
    </div>
  );
}

export default App;

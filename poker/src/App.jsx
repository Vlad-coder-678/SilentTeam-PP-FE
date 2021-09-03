import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import MainPage from './pages/MainPage';
import LobbyPage from './pages/LobbyPage';
import GamePage from './pages/GamePage';
import GameResultPage from './pages/GameResultPage';
import NotFoundPage from './pages/NotFoundPage';

import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main>
        <Switch location={location}>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/lobby">
            <LobbyPage />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
          <Route path="/game_result">
            <GameResultPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

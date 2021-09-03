import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';

import MainPage from './pages/MainPage/MainPage';
import LobbyPage from './pages/LobbyPage/LobbyPage';
import GamePage from './pages/GamePage/GamePage';
import GameResultPage from './pages/GameResultPage/GameResultPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Footer from './components/Footer/Footer';

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

import React, { FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header.tsx';

import MainPage from './pages/MainPage/MainPage.tsx';
import LobbyPage from './pages/LobbyPage/LobbyPage.tsx';
import GamePage from './pages/GamePage/GamePage.tsx';
import GameResultPage from './pages/GameResultPage/GameResultPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';

import Footer from './components/Footer/Footer.tsx';

const App: FC = () => {
  const location: string = useLocation();

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
};

export default App;

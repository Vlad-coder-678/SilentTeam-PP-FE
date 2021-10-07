import React, { FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import LobbyPage from '../../pages/LobbyPage/LobbyPage';
import GamePage from '../../pages/GamePage/GamePage';
import GameResultPage from '../../pages/GameResultPage/ResultsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import styles from './Main.module.scss';

const Main: FC = () => {
  const location = useLocation();

  return (
    <main className={styles.main_wrapper}>
      <Switch location={location}>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path={'/lobby'}>
          <LobbyPage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
        <Route path="/result">
          <GameResultPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;

import React, { FC } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import MainPage from '../../pages/MainPage/MainPage';
import LobbyPage from '../../pages/LobbyPage/LobbyPage';
import GamePage from '../../pages/GamePage/GamePage';
import GameResultPage from '../../pages/GameResultPage/GameResultPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

import mockRoom from '../../__mocks__/mockRoom';

const Main: FC = () => {
  const location = useLocation();

  return (
    <main>
      <Switch location={location}>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path={'/lobby'}>
          <LobbyPage users={mockRoom.users} link={location.pathname} />
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
  );
};

export default Main;

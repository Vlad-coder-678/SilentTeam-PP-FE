import React, { useState, FC, ChangeEvent } from 'react';

import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import ConnectToLobby from '../../components/ConnectToLobby/ConnectToLobby';

import m from './MainPage.module.scss';

import Counter from '../../redux/Counter';

const MainPage: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCreateNewGame = () => {
    setIsVisible(true);
    console.log('start new game');
  };

  const handleConnectToGame = () => {
    setIsVisible(true);
    console.log('connect');
  };

  const handleEnterUrlGame = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={m.MainPage_wrap}>
      <MainPageTitle />
      <Counter />
      <h3>Start your planning:</h3>
      <div className={m.MainPage_item}>
        <label>Create session:</label>
        <GeneralButton
          label={'Create new game'}
          onClick={handleCreateNewGame}
          primaryBG
        />
      </div>
      <h3>OR:</h3>
      <label>
        Connect to lobby by <span>URL</span>:
      </label>
      <div className={m.MainPage_item}>
        <InputComponent onChange={handleEnterUrlGame} />
        <GeneralButton
          label={'Connect'}
          onClick={handleConnectToGame}
          primaryBG
        />
      </div>
      {isVisible && <ConnectToLobby setIsVisible={setIsVisible} />}
    </div>
  );
};

export default MainPage;

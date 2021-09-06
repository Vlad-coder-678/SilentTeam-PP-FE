import React, { FC, ChangeEvent } from 'react';

import m from './MainPage.module.scss';

import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import PopupForm from '../../components/PopupForm/PopupForm';

const MainPage: FC = () => {
  const handleCreateNewGame = () => {
    console.log('start new game');
  };

  const handleConnectToGame = () => {
    console.log('connect');
  };

  const handleEnterUrlGame = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={m.MainPage_wrap}>
      <MainPageTitle />
      <h3>Start your planning:</h3>
      <div className={m.MainPage_item}>
        <label>Create session:</label>
        <PopupForm label={'Start new game'} primaryBG />
      </div>
      <h3>OR:</h3>
      <label>
        Connect to lobby by <span>URL</span>:
      </label>
      <div className={m.MainPage_item}>
        <InputComponent onChange={handleEnterUrlGame} />
        <PopupForm label={'Connect'} primaryBG />
      </div>
    </div>
  );
};

export default MainPage;

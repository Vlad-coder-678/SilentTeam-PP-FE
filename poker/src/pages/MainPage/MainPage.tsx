import React, { useState, FC, ChangeEvent } from 'react';

import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import ConnectToLobby from '../../components/ConnectToLobby/ConnectToLobby';
import { ROLES } from '../../types/common';

import styles from './MainPage.module.scss';

import Counter from '../../redux/Counter';

const MainPage: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [role, setRole] = useState<ROLES>(ROLES.ADMIN);
  const [url, setUrl] = useState<string>('');

  const handleCreateNewGame = (): void => {
    setIsVisible(true);
  };

  const handleConnectToGame = (): void => {
    setRole(ROLES.USER);
    setIsVisible(true);
  };

  const handleEnterUrlGame = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };

  return (
    <div className={styles.MainPage_wrap}>
      <MainPageTitle />
      <Counter />
      <h3>Start your planning:</h3>
      <div className={styles.MainPage_item}>
        <label>Create session:</label>
        <GeneralButton type="button" label={'Create new game'} onClick={handleCreateNewGame} primaryBG />
      </div>
      <h3>OR:</h3>
      <label>
        Connect to lobby by <span>URL</span>:
      </label>
      <div className={styles.MainPage_item}>
        <InputComponent onChange={handleEnterUrlGame} />
        <GeneralButton type="button" label={'Connect'} onClick={handleConnectToGame} primaryBG />
      </div>
      {isVisible && <ConnectToLobby setIsVisible={setIsVisible} role={role} url={url}/>}
    </div>
  );
};

export default MainPage;

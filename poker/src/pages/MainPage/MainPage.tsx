import React, { useState, FC, ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import ConnectToLobby from '../../components/ConnectToLobby/ConnectToLobby';
import { setIsAdmin } from '../../redux/slices/roomSlice';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const handleCreateNewGame = (): void => {
    dispatch(setIsAdmin(true));
    setIsVisible(true);
  };

  const handleConnectToGame = (): void => {
    setIsVisible(true);
  };

  const handleEnterUrlGame = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };

  return (
    <div className={styles.MainPage_wrap}>
      <MainPageTitle />
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
      {isVisible && <ConnectToLobby setIsVisible={setIsVisible} url={url} />}
    </div>
  );
};

export default MainPage;

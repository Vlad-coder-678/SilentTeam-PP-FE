import React from 'react';
import m from './MainPage.module.scss';
import MainPageTitle from '../../components/MainPageTitle/MainPageTitle';
import BlueButton from '../../components/BlueButton/BlueButton';

const MainPage = () => {
  const handleClick1 = () => {
    console.log('start new game');
  };
  const handleClick2 = () => {
    console.log('connect');
  };

  return (
    <div className={m.MainPage_wrap}>
      <MainPageTitle />
      <h3>Start your planning:</h3>
      <div className={m.MainPage_item}>
        <label>Create session:</label>
        <BlueButton
          label={'Start new game'}
          onClick={handleClick1}
          primary={1}
        />
      </div>
      <h3>OR:</h3>
      <label>
        Connect to lobby by <span>URL</span>:
      </label>
      <div className={m.MainPage_item}>
        <input />
        <BlueButton label={'Connect'} onClick={handleClick2} primary={1} />
      </div>
    </div>
  );
};

export default MainPage;

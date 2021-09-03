import React from 'react';
import m from './MainPage.module.scss';
import MainPageTitle from '../components/MainPageTitle';

const MainPage = () => (
  <div className={m.MainPage_wrap}>
    <MainPageTitle />
    <h3>Start your planning:</h3>
    <label>Create session:</label>
    <button>Start new game</button>
    <h3>OR:</h3>
    <label>Connect to lobby by URL:</label>
    <input />
    <button>Connect</button>
  </div>
);

export default MainPage;

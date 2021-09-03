import React from 'react';
import cards from '../../assets/images/cards.png';
import m from './MainPageTitle.module.scss';

const MainPageTitle = () => (
  <div className={m.main_page_title_wrap}>
    <div className={m.main_page_title_left}>
      <img src={cards} alt={'pocker planning'} />
    </div>
    <div className={m.main_page_title_right}>
      <h2>Poker</h2>
      <h2>Planning</h2>
    </div>
  </div>
);

export default MainPageTitle;

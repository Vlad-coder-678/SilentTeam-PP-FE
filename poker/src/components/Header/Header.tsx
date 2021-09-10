import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import addMessageIcon from '../../assets/images/add_message.svg';

import h from './Header.module.scss';

const Header: FC = () => {
  const handlerOnToggleChat = () => {
    console.log('toogle chat');
  };

  return (
    <div className={h.Header_wrapper}>
      <div className={h.Header_topLine}>
        <img className={h.icon} src={addMessageIcon} alt="add message" onClick={handlerOnToggleChat} />
      </div>
      <div className={h.Header_bottomLine}>
        <div className={h.Header_logoWrap}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Header;

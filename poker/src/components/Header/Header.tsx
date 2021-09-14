import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import addMessageIcon from '../../assets/images/svg/add_message.svg';

import styles from './Header.module.scss';

const Header: FC = () => {
  const handlerOnToggleChat = (): void => {
    console.log('toogle chat');
  };

  return (
    <div className={styles.Header_wrapper}>
      <div className={styles.Header_topLine}>
        <img className={styles.icon} src={addMessageIcon} alt="add message" onClick={handlerOnToggleChat} />
      </div>
      <div className={styles.Header_bottomLine}>
        <div className={styles.Header_logoWrap}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Header;

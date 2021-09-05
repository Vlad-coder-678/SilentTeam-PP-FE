import React, { FC } from 'react';
import Logo from '../Logo/Logo';

import h from './Header.module.scss';

const Header: FC = () => (
  <div className={h.Header_wrapper}>
    <div className={h.Header_topLine}></div>
    <div className={h.Header_bottomLine}>
      <div className={h.Header_logoWrap}>
        <Logo />
      </div>
    </div>
  </div>
);

export default Header;

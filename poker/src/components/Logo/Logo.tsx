import React, { FC } from 'react';
import st from './Logo.module.scss';

const Logo: FC = () => (
  <div className={st.Logo_bg}>
    <div className={st.Logo_upP}>P</div>
    <div className={st.Logo_downP}>P</div>
  </div>
);

export default Logo;

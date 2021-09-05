import React, { FC } from 'react';
import logoSchool from '../../assets/images/rs_school_js_white.svg';
import l from './LogoRSS.module.scss';

const LogoRSS: FC = () => (
  <a href="https://rs.school/react/">
    <div className={l.Logo_rs_wrapper}>
      <img className={l.Logo_rs_img} src={logoSchool} alt="logo school rss" />
    </div>
  </a>
);

export default LogoRSS;

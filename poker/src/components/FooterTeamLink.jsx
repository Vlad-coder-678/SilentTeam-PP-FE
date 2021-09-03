import React from 'react';
import f from './FooterTeamLink.module.scss';
import gitLogo from '../assets/images/gitHubLink.svg';

const FooterTeamLink = ({ url, imgAlt }) => (
  <a href={url} rel="noreferrer" target="_blank">
    <div className={f.FooterTeamLink}>
      <img src={gitLogo} alt={imgAlt} />
    </div>
  </a>
);

export default FooterTeamLink;

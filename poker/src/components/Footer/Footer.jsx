import React from 'react';
import LogoRSS from '../LogoRSS/LogoRSS';
import f from './Footer.module.scss';
import FooterTeamLink from '../FooterTeamLink/FooterTeamLink';

const teams = [
  {
    name: 'anatoliyak',
    position: 'mentor/teamlead',
    url: 'https://github.com/anatoliyak',
  },
  {
    name: 'GoodFellow23',
    position: 'frontend dev',
    url: 'https://github.com/GoodFellow23',
  },
  {
    name: 'Evgenia-cyber',
    position: 'fullstack dev',
    url: 'https://github.com/Evgenia-cyber',
  },
  {
    name: 'Vlad-coder-678',
    position: 'frontend dev',
    url: 'https://github.com/Vlad-coder-678',
  },
];

const Footer = () => (
  <div className={f.Footer_wrap}>
    <div className={f.Footer_item}>
      Made by
      {teams.map(({ url, name }) => (
        <div key={name}>
          <FooterTeamLink url={url} imgAlt={name} />
        </div>
      ))}
    </div>
    <div className={f.Footer_item}>
      from
      <LogoRSS />
      in 2021
    </div>
  </div>
);

export default Footer;

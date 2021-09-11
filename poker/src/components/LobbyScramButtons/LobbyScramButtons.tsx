import React, { FC } from 'react';

import GeneralButton from '../GeneralButton/GeneralButton';

import styled from './LobbyScramButtons.module.scss';

interface Props {
  link: string;
}

const LobbyScramButtons: FC<Props> = ({ link }) => (
  <div>
    <div className={styled.lobbyPage_section_link}>
      <h3>Link to lobby:</h3>
      <div className={styled.lobbyPage_location}>
        <p>{link}asdklasjdkjskdjkl</p>
        <GeneralButton label={'Copy'} primaryBG />
      </div>
    </div>

    <div className={styled.lobbyPage_section_button}>
      <GeneralButton label={'Start Game'} primaryBG />
      <GeneralButton label={'Cancel Game'} />
    </div>
  </div>
);

export default LobbyScramButtons;

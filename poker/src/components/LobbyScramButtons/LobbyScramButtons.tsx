import React, { FC } from 'react';

import GeneralButton from '../GeneralButton/GeneralButton';

import styles from './LobbyScramButtons.module.scss';

interface Props {
  link: string;
}

const LobbyScramButtons: FC<Props> = ({ link }) => (
  <div>
    <div className={styles.lobbyPage_section_link}>
      <h3>Link to lobby:</h3>
      <div className={styles.lobbyPage_location}>
        <p>{link}asdklasjdkjskdjkl</p>
        <GeneralButton type="button" label={'Copy'} primaryBG />
      </div>
    </div>

    <div className={styles.lobbyPage_section_button}>
      <GeneralButton type="button" label={'Start Game'} primaryBG />
      <GeneralButton type="button" label={'Cancel Game'} />
    </div>
  </div>
);

export default LobbyScramButtons;

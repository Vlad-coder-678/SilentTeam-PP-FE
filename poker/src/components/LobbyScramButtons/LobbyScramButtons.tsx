import React, { FC } from 'react';

import GeneralButton from '../GeneralButton/GeneralButton';

import styles from './LobbyScramButtons.module.scss';

interface Props {
  room: string;
}

const LobbyScramButtons: FC<Props> = ({ room }) => {
  const { origin } = window.location;
  const url = `${origin}/#${room}`;
  const handleCopyLink = (): void => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div>
      <div className={styles.lobbyPage_section_link}>
        <h3>Link to lobby:</h3>
        <div className={styles.lobbyPage_location}>
          <p>{url}</p>
          <GeneralButton type="button" label={'Copy'} primaryBG onClick={handleCopyLink} />
        </div>
      </div>

      <div className={styles.lobbyPage_section_button}>
        <GeneralButton type="button" label={'Start Game'} primaryBG />
        <GeneralButton type="button" label={'Cancel Game'} />
      </div>
    </div>
  );
};

export default LobbyScramButtons;

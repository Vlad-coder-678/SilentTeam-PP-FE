import React, { FC } from 'react';
import Popup from 'reactjs-popup';
import ConnectToLobby from '../ConnectToLobby/ConnectToLobby';
import 'reactjs-popup/dist/index.css';
import b from './GeneralButton.module.scss';

interface Props {
  label: string;
  primaryBG: boolean;
}

const GeneralButton: FC<Props> = ({ label, primaryBG }) => (
  <Popup
    trigger={
      <button className={primaryBG ? b.GeneralButton_blue : b.GeneralButton_white}>
          {label}
      </button>
    }
    position="center center">
    <ConnectToLobby />
  </Popup>
);

export default GeneralButton;

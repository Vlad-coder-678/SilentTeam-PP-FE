import React, { FC } from 'react';
import './PopupForm.scss';
import Popup from 'reactjs-popup';
import ConnectToLobby from '../ConnectToLobby/ConnectToLobby';
import GenerateButton from '../GeneralButton/GeneralButton';
import 'reactjs-popup/dist/index.css';
import b from '../GeneralButton/GeneralButton.module.scss';

interface Props {
    label: string;
    primaryBG: boolean;
}

const PopupForm: FC<Props> = ({ label, primaryBG }) => (
    <Popup
        trigger={
            <button className={primaryBG ? b.GeneralButton_blue : b.GeneralButton_white}>
            {label}
            </button>
        }
        modal
    >
        <ConnectToLobby />
    </Popup>
);

export default PopupForm;

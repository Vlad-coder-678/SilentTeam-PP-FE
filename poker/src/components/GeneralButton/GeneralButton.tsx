import React, { FC, MouseEvent } from 'react';
import b from './GeneralButton.module.scss';

interface Props {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  primaryBG?: boolean;
}

const GeneralButton: FC<Props> = ({ label, type, onClick, primaryBG }) => (
  <button
    type={type}
    onClick={onClick}
    className={primaryBG ? b.GeneralButton_blue : b.GeneralButton_white}
  >
    {label}
  </button>
);

export default GeneralButton;

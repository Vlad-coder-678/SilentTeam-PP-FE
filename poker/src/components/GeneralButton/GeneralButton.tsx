import React, { FC, MouseEventHandler } from 'react';
import b from './GeneralButton.module.scss';

interface Props {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  primaryBG: boolean;
}

const GeneralButton: FC<Props> = ({ label, onClick, primaryBG }) => (
  <button onClick={onClick} className={primaryBG ? b.GeneralButton_blue : b.GeneralButton_white}>
    {label}
  </button>
);

export default GeneralButton;

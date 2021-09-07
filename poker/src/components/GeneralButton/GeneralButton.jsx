import React from 'react';
import b from './GeneralButton.module.scss';

const GeneralButton = ({ label, onClick, primaryBG }) => (
  <button onClick={onClick} className={primaryBG ? b.GeneralButton_blue : b.GeneralButton_white}>
    {label}
  </button>
);

export default GeneralButton;

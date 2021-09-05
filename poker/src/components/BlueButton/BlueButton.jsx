import React from 'react';
import b from './BlueButton.module.scss';

const BlueButton = ({ label, onClick, primary }) => (
  <button
    onClick={onClick}
    className={primary ? b.BlueButton_blue : b.BlueButton_white}
  >
    {label}
  </button>
);

export default BlueButton;

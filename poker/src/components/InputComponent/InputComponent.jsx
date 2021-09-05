import React from 'react';
import i from './InputComponent.module.scss';

const InputComponent = ({ onChange }) => <input onChange={onChange} className={i.InputComponent} />;

export default InputComponent;

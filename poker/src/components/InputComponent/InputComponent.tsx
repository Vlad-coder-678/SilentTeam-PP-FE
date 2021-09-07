import React, { FC, ChangeEvent } from 'react';
import i from './InputComponent.module.scss';

interface Props {
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<Props> = ({ onChange, name, value }) => (
  <input name={name} value={value} onChange={onChange} className={i.InputComponent} />
);

export default InputComponent;

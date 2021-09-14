import React, { FC, ChangeEvent } from 'react';
import styles from './InputComponent.module.scss';

interface Props {
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: FC<Props> = ({ onChange, name, value }) => (
  <input name={name} value={value} onChange={onChange} className={styles.InputComponent} />
);

export default InputComponent;

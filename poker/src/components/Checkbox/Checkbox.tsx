import React from 'react';
import styles from './Checkbox.module.scss';

interface Props {
  name: string;
  value?: string;
  onChange?: () => void;
}

const Checkbox: React.FC<Props> = ({ name, value, onChange }) => (
  <div className={styles.Checkbox_container}>
    <input
      type="checkbox"
      className={styles.Checkbox}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Checkbox;

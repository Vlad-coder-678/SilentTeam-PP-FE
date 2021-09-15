import React, { FC } from 'react';
import styles from './TitleSection.module.scss';

interface Props {
  title: string;
}

const TitleSection: FC<Props> = ({ title }) => (
  <div className={styles.title_section}>
    <h3>{title}</h3>
  </div>
);

export default TitleSection;

import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { selectedIssue } from '../../redux/slices/gameProcessSlice';

import styles from './CardIssueGame.module.scss';

interface Props {
  id: string;
  title: string;
  isChecked: boolean;
}

const CardIssueGame: FC<Props> = ({ id, title, isChecked }) => {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(selectedIssue(id));
  };

  return (
    <div className={isChecked ? styles.cardIssue_checkedWrap : styles.cardIssue_wrap} onClick={handleClick}>
      <div className={styles.cardIssue_item}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default CardIssueGame;

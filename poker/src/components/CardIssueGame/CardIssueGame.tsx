import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { issueIdSelectedSlice, selectedIssue } from '../../redux/slices/gameProcessSlice';

import styles from './CardIssueGame.module.scss';

interface Props {
  id: string;
  title: string;
}

const CardIssueGame: FC<Props> = ({ id, title }) => {
  const dispatch = useDispatch();
  const issueIdSelected = useSelector(issueIdSelectedSlice);
  const isChecked = issueIdSelected === id;

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

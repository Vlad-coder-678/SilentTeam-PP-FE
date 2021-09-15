/* eslint-disable max-len */
import React, { FC } from 'react';

import pencil from '../../assets/images/svg/pencil.svg';
import basket from '../../assets/images/svg/basket.svg';
import plus from '../../assets/images/svg/plus2.svg';

import styles from './CardIssue.module.scss';

interface Props {
  issueId?: string;
  isNew?: boolean;
}

const CardIssue: FC<Props> = ({ issueId, isNew }) => (
  <div className={styles.cardIssue_wrap}>
    {isNew ? (
      <div className={styles.cardIssue_item}>
        <h3>Create new issue</h3>
        <button type="button">
          <img src={plus} alt="create new" />
        </button>
      </div>
    ) : (
      <div className={styles.cardIssue_item}>
        <h3>Issue {issueId}</h3>
        <p>Low property</p>
        <div className={styles.cardIssue_item_buttons}>
          <button type="button">
            <img src={pencil} alt="pencil" />
          </button>
          <button type="button">
            <img src={basket} alt="basket" />
          </button>
        </div>
      </div>
    )}
  </div>
);

export default CardIssue;

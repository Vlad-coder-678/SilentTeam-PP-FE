import React, { FC } from 'react';

import styles from './IssueChatScoreCard.module.scss';

const IssueChatScoreCard: FC = () => (
  <div className={styles.IssueChatScoreCard_wrap}>
    <div className={styles.IssueChatScoreCard_value}>1000</div>
    <div className={styles.IssueChatScoreCard_storyTypeShort}>SPSP</div>
  </div>
);

export default IssueChatScoreCard;

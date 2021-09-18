import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import { mockCurrentUserId } from '../../__mocks__/mockChat';
import { ROLES, SIZES } from '../../types/common';

import styles from './IssueChatScoreCard.module.scss';

// interface Props {
//   value: number;
//   storyTypeShort: string;
// }

// const IssueChatScoreCard: FC<Props> = ({ value, storyTypeShort }) => {
//   const currentUserId = mockCurrentUserId;

//   return (
//     <div className={styles.IssueChatScoreCard_wrap}>
//       <div>{value}</div>
//       <div>{storyTypeShort}</div>
//     </div>
//   );
// };

const IssueChatScoreCard: FC = () => {
  const currentUserId = mockCurrentUserId;

  return (
    <div className={styles.IssueChatScoreCard_wrap}>
      <div className={styles.IssueChatScoreCard_value}>1000</div>
      <div className={styles.IssueChatScoreCard_storyTypeShort}>SPSP</div>
    </div>
  );
};

export default IssueChatScoreCard;

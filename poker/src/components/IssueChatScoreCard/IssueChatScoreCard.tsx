import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import VoitingLoader from '../VoitingLoader/VoitingLoader';

import styles from './IssueChatScoreCard.module.scss';

interface Props {
  value: string;
}

const IssueChatScoreCard: FC<Props> = ({ value }) => {
  const { storyTypeShort } = useSelector(selectGameSetting);

  return (
    <div className={styles.IssueChatScoreCard_wrap}>
      <div className={styles.IssueChatScoreCard_value}>{value === '' ? <VoitingLoader /> : value}</div>
      <div className={styles.IssueChatScoreCard_storyTypeShort}>{storyTypeShort}</div>
    </div>
  );
};

export default IssueChatScoreCard;

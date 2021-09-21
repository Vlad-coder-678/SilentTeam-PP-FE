import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import { ROLES, SIZES } from '../../types/common';
import { currentUserSlice } from '../../redux/slices/roomSlice';

import styles from './IssueChatUserCard.module.scss';

interface Props {
  userId: string;
  firstName: string;
  lastName?: string;
  job?: string;
  role: ROLES;
}

const IssueChatUserCard: FC<Props> = ({ userId, firstName, lastName, role, job }) => {
  const { userId: currentUserId } = useSelector(currentUserSlice);

  return (
    <div className={styles.IssueChatUserCard_wrap}>
      <div className={styles.IssueChatUserCard_user}>
        <div>
          <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
          {userId === currentUserId && <p className={styles.IssueChatUserCard_you}>it's you</p>}
        </div>

        <div>
          <p className={styles.IssueChatUserCard_name}>{firstName}</p>
          <p className={styles.IssueChatUserCard_name}>{lastName}</p>
          <p className={styles.IssueChatUserCard_job}>{job}</p>
        </div>
      </div>
      <KickButton size={SIZES.SMALL} userId={userId} firstName={firstName} lastName={lastName} role={role} />
    </div>
  );
};

export default IssueChatUserCard;

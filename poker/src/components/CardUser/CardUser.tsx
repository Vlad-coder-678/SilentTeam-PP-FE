import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { currentUserSlice } from '../../redux/slices/roomSlice';
import { ROLES, SIZES } from '../../types/common';
import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import styles from './CardUser.module.scss';

export interface userProps {
  userId: string;
  firstName: string;
  lastName?: string;
  jobPosition?: string;
  role: ROLES;
}

const CardUser: FC<userProps> = ({ userId, firstName, lastName, jobPosition, role }) => {
  const { userId: currentUserId } = useSelector(currentUserSlice);
  return (
    <div className={styles.CardUser_wrap}>
      <Avatar size={SIZES.MEDIUM} firstName={firstName} lastName={lastName} role={role} />
      {userId === currentUserId && <p className={styles.IssueChatUserCard_you}>it's you</p>}
      <div className={styles.CardUser_fullName}>
        {lastName && <p className={styles.CardUser_surname}>{lastName}</p>}
        <h3>{firstName}</h3>
        {jobPosition && <p className={styles.CardUser_job}>{jobPosition}</p>}
      </div>
      <div className={styles.CardUser_kickButtonWrapper}>
        <KickButton size={SIZES.MEDIUM} userId={userId} firstName={firstName} lastName={lastName} role={role} />
      </div>
    </div>
  );
};

export default CardUser;

import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import kickIcon from '../../assets/images/kick.svg';
import { mockCurrentUserId } from '../../__mocks__/mockChat';
import { ROLES, SIZES } from '../../types/common';

import styles from './ChatCard.module.scss';

interface Props {
  userId: string;
  firstName: string;
  lastName?: string;
  role: ROLES;
  message: string;
}

const ChatCard: FC<Props> = ({ userId, firstName, lastName, role, message }) => {
  const currentUserId = mockCurrentUserId;

  const handleOnKickUser = (): void => {
    console.log(`Kick user ${userId} and all his messages`);
  };

  return (
    <div className={role === ROLES.ADMIN ? styles.ChatCard_wrap_admin : styles.ChatCard_wrap}>
      <div className={styles.ChatCard_header}>
        <div className={styles.ChatCard_user}>
          <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
          <div>
            {userId === currentUserId && <p className={styles.ChatCard_you}>it's you</p>}
            <p className={styles.ChatCard_name}>
              {firstName} {lastName}
            </p>
          </div>
        </div>
        {/* {currentRole === ROLES.ADMIN && role !== ROLES.ADMIN && (
          <img className={styles.ChatCard_icon} src={kickIcon} alt="kick" onClick={handleOnKickUser} />
        )} */}
        <img className={styles.ChatCard_icon} src={kickIcon} alt="kick" onClick={handleOnKickUser} />
      </div>
      <p className={styles.ChatCard_content}>{message}</p>
    </div>
  );
};

export default ChatCard;

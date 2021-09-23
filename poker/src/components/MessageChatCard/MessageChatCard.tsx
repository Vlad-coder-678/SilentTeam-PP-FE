import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import { Message, ROLES, SIZES } from '../../types/common';

import { KICKED_ID } from '../../constants';
import { currentUserSlice } from '../../redux/slices/roomSlice';

import styles from './MessageChatCard.module.scss';

interface Props {
  messageCard: Message;
}

const MessageChatCard: FC<Props> = ({ messageCard }) => {
  const { userId: currentUserId } = useSelector(currentUserSlice);

  const { userId, firstName, lastName, role, message } = messageCard;

  return (
    <div className={role === ROLES.ADMIN ? styles.messageChatCard_wrap_admin : styles.messageChatCard_wrap}>
      <div className={styles.messageChatCard_header}>
        <div className={styles.messageChatCard_wrap_ava}>
          <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
        </div>
        <div className={userId === KICKED_ID ? styles.messageChatCard_kick : styles.messageChatCard_name}>
          <p>
            {firstName} {lastName}
          </p>
          {userId === currentUserId && <p className={styles.messageChatCard_its_you}>it's you</p>}
        </div>
        <KickButton size={SIZES.SMALL} userId={userId} firstName={firstName} lastName={lastName} role={role} />
      </div>
      <p className={styles.messageChatCard_content}>{message}</p>
    </div>
  );
};

export default MessageChatCard;

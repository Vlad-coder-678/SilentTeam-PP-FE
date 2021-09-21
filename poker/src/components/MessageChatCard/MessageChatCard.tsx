import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import KickButton from '../KickButton/KickButton';
import { mockCurrentUserId } from '../../__mocks__/mockChat';
import { Message, ROLES, SIZES } from '../../types/common';

import styles from './MessageChatCard.module.scss';
import { KICKED_ID } from '../../constants';

interface Props {
  messageCard: Message;
}

const MessageChatCard: FC<Props> = ({ messageCard }) => {
  const currentUserId = mockCurrentUserId;

  const { userId, firstName, lastName, role, message } = messageCard;

  return (
    <div className={role === ROLES.ADMIN ? styles.messageChatCard_wrap_admin : styles.messageChatCard_wrap}>
      <div className={styles.messageChatCard_header}>
        <div className={styles.messageChatCard_user}>
          <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
          <div>
            {userId === currentUserId && <p className={styles.messageChatCard_you}>it's you</p>}
            <p className={userId === KICKED_ID ? styles.messageChatCard_kick : styles.messageChatCard_name}>
              {firstName} {lastName}
            </p>
          </div>
        </div>
        {/* {currentRole === ROLES.ADMIN && role !== ROLES.ADMIN && (
          <img className={styles.messageChatCard_icon} src={kickIcon} alt="kick" onClick={handleOnKickUser} />
        )} */}
        <KickButton
          size={SIZES.SMALL}
          userId={userId}
          firstName={firstName}
          lastName={lastName}
          role={role}
        />
      </div>
      <p className={styles.messageChatCard_content}>{message}</p>
    </div>
  );
};

export default MessageChatCard;

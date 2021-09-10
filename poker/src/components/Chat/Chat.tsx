import React, { FC } from 'react';
import { mockChat } from '../../__mocks__/mockChat';
import ChatCard from '../ChatCard/ChatCard';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = mockChat;

  return (
    <div className={styles.Chat_wrap}>
      {chat.length > 0 &&
        chat.map((item) => (
          <ChatCard
            key={item.userId}
            userId={item.userId}
            firstName={item.firstName}
            lastName={item.lastName}
            role={item.role}
            message={item.message}
          />
        ))}
    </div>
  );
};

export default Chat;

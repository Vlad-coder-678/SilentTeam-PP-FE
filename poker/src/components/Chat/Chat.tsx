import React, { FC } from 'react';
import { mockChat } from '../../__mocks__/mockChat';
import ChatCard from '../ChatCard/ChatCard';
import ChatInput from '../ChatInput/ChatInput';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = mockChat;

  return (
    <div className={styles.Chat_wrap}>
      <div className={styles.Chat_cards}>
        {chat.length > 0 &&
          chat.map((item, index) => (
            <ChatCard
              key={item.userId + index}
              userId={item.userId}
              firstName={item.firstName}
              lastName={item.lastName}
              role={item.role}
              message={item.message}
            />
          ))}
      </div>
      <div className={styles.Chat_input}>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;

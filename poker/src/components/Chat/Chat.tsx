import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { chatMessagesSlice } from '../../redux/slices/chatSlice';
import ChatCard from '../ChatCard/ChatCard';
import ChatInput from '../ChatInput/ChatInput';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = useSelector(chatMessagesSlice);

  const lastMessageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat]);

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
        <div ref={lastMessageRef}></div>
      </div>
      <div className={styles.Chat_input}>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;

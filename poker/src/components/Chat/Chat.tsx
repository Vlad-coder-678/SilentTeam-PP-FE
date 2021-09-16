import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatMessagesSlice, updateAllChat } from '../../redux/slices/chatSlice';
import { SocketContext } from '../../socketContext';
import { Message } from '../../types/common';
import ChatCard from '../ChatCard/ChatCard';
import ChatInput from '../ChatInput/ChatInput';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = useSelector(chatMessagesSlice);

  const socket = React.useContext(SocketContext);

  const dispatch = useDispatch();

  const lastMessageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat, lastMessageRef]);

  React.useEffect(() => {
    const updateAllChatSuccess = (response: Array<Message>): void => {
      dispatch(updateAllChat(response));
    };

    socket.on('update-chat', updateAllChatSuccess);

    return (): void => {
      socket.off('update-chat', updateAllChatSuccess);
    };
  });

  return (
    <div className={styles.Chat_wrap}>
      <div className={styles.Chat_cards}>
        {chat.length > 0 && chat.map((item, index) => <ChatCard key={item.userId + index} messageCard={item} />)}
        <div ref={lastMessageRef}></div>
      </div>
      <div className={styles.Chat_input}>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;

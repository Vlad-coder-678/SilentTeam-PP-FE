import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { chatMessagesSlice, updateAllChat } from '../../redux/slices/chatSlice';
import { currentRoomSlice } from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import { ResponseFromSocket } from '../../types/common';
import ChatCard from '../ChatCard/ChatCard';
import ChatInput from '../ChatInput/ChatInput';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = useSelector(chatMessagesSlice);
  const room = useSelector(currentRoomSlice);

  console.log('chat', chat);
  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const dispatch = useDispatch();

  const lastMessageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat, lastMessageRef]);

  React.useEffect(() => {
    const callback = (response: ResponseFromSocket): void => {
      console.log('get-all-chat', response);

      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { messages: responseMessages } = data;
        dispatch(updateAllChat(responseMessages));
      }
    };

    socket.emit('get-all-chat', room, callback);
  }, [dispatch, room, socket]);

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

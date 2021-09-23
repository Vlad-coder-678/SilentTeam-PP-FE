import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

import ChatCard from '../ChatCard/ChatCard';
import ChatInput from '../ChatInput/ChatInput';

import { chatMessagesSlice, updateAllChat, updateChat } from '../../redux/slices/chatSlice';
import { currentRoomSlice } from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import { ResponseFromSocket } from '../../types/common';

import styles from './Chat.module.scss';

const Chat: FC = () => {
  const chat = useSelector(chatMessagesSlice);
  const room = useSelector(currentRoomSlice);
  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);
  const dispatch = useDispatch();

  const lastMessageRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [chat, lastMessageRef]);

  React.useEffect(() => {
    const callback = (response: ResponseFromSocket): void => {
      console.log(response);

      const { eventName, code, error: responseError, data } = response;

      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { messages: responseMessages } = data;
        dispatch(updateAllChat(responseMessages));
      }
    };

    socket.emit('get-all-chat', room, callback);
  }, [dispatch, room, socket]);

  React.useEffect(() => {
    const updateAllChatSuccess = (response: ResponseFromSocket): void => {
      console.log(response);

      const { eventName, code, error: responseError, data } = response;
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { messages: responseMessages } = data;
        dispatch(updateAllChat(responseMessages));
      }
    };

    socket.on('update-chat', updateAllChatSuccess);

    return (): void => {
      socket.off('update-chat', updateAllChatSuccess);
    };
  });

  React.useEffect(() => {
    const updateChatSuccess = (response: ResponseFromSocket): void => {
      console.log(response);

      const { eventName, code, error: responseError, data } = response;

      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { message: responseMessage } = data;
        dispatch(updateChat(responseMessage));
      }
    };

    socket.on('get-message', updateChatSuccess);

    return (): void => {
      socket.off('get-message', updateChatSuccess);
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

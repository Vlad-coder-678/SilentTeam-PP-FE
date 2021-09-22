import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../socketContext';
import Avatar from '../Avatar/Avatar';
import sendIcon from '../../assets/images/svg/send.svg';
import { ResponseFromSocket, SIZES } from '../../types/common';
import { MAX_CHAT_MESSAGE_LENGTH } from '../../constants';
import { currentRoomSlice, currentUserSlice } from '../../redux/slices/roomSlice';
import { updateChat } from '../../redux/slices/chatSlice';

import styles from './ChatInput.module.scss';

const ChatInput: FC = () => {
  const room = useSelector(currentRoomSlice);
  const { userId, firstName, lastName, role } = useSelector(currentUserSlice);

  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = React.useState('');

  const handleOnSendMessage = (): void => {
    const callback = (response: ResponseFromSocket): void => {
      console.log('send-messge', response);

      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { message: responseMessage } = data;
        dispatch(updateChat(responseMessage));
        setNewMessage('');
      }
    };

    if (newMessage) {
      const message = {
        userId,
        newMessage,
        firstName,
        lastName,
        role,
      };
      socket.emit('send-message', message, room, callback);
    }
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewMessage(event.target.value);
  };

  return (
    <div className={styles.ChatInput_wrap}>
      <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
      <textarea
        className={styles.ChatInput_textarea}
        value={newMessage}
        onChange={handleOnInputChange}
        placeholder="Enter your message"
        autoFocus
        maxLength={MAX_CHAT_MESSAGE_LENGTH}
      />
      <img className={styles.ChatInput_icon} src={sendIcon} alt="send" onClick={handleOnSendMessage} />
    </div>
  );
};

export default ChatInput;

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../socketContext';
import Avatar from '../Avatar/Avatar';
import sendIcon from '../../assets/images/svg/send.svg';
import { mockChatInput, mockCurrentUserId } from '../../__mocks__/mockChat';
import { Message, SIZES } from '../../types/common';
import { MAX_CHAT_MESSAGE_LENGTH } from '../../constants';

import { chatMessagesSlice, updateChat } from '../../redux/slices/chatSlice';

import styles from './ChatInput.module.scss';

const ChatInput: FC = () => {
  const { firstName, lastName, role } = mockChatInput;
  const room = '1234567';
  const userId = mockCurrentUserId;

  const chat = useSelector(chatMessagesSlice);

  const socket = React.useContext(SocketContext);

  const dispatch = useDispatch();

  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const updateChatSuccess = (response: Message): void => {
      dispatch(updateChat(response));
      setMessage('');
    };

    socket.on('get-message', updateChatSuccess);

    return (): void => {
      socket.off('get-message', updateChatSuccess);
    };
  }, [dispatch, socket, chat]);

  const handleOnSendMessage = (): void => {
    if (message) {
      const payload = {
        room,
        userId,
        message,
        firstName,
        lastName,
        role,
      };
      socket.emit('send-message', payload);
    }
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value);
  };

  return (
    <div className={styles.ChatInput_wrap}>
      <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
      <textarea
        className={styles.ChatInput_textarea}
        value={message}
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

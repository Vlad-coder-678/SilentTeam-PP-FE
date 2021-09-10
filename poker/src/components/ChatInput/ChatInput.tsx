import React, { FC } from 'react';
import Avatar from '../Avatar/Avatar';
import sendIcon from '../../assets/images/send.svg';
import { mockChatInput } from '../../__mocks__/mockChat';
import { SIZES } from '../../types/common';
import { MAX_CHAT_MESSAGE_LENGTH } from '../../constants';

import styles from './ChatInput.module.scss';

const ChatInput: FC = () => {
  const { firstName, lastName, role } = mockChatInput;

  const [value, setValue] = React.useState('');

  const handleOnSendMessage = () => {
    console.log('message', value);
    console.log('Send message and update chat');
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.ChatInput_wrap}>
      <Avatar role={role} size={SIZES.SMALL} firstName={firstName} lastName={lastName} />
      <textarea
        className={styles.ChatInput_textarea}
        value={value}
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

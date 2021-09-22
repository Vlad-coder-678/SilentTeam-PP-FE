import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../socketContext';
import { mockIssueChat } from '../../__mocks__/mockIssueChat';
import IssueChatScoreCard from '../IssueChatScoreCard/IssueChatScoreCard';
import IssueChatUserCard from '../IssueChatUserCard/IssueChatUserCard';

import styles from './ChatToVoteOnIssue.module.scss';

const ChatToVoteOnIssue: FC = () => {
  // const chat = useSelector(chatMessagesSlice);
  const issueChat = mockIssueChat;

  const socket = React.useContext(SocketContext);

  const dispatch = useDispatch();

  const lastUserRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  React.useEffect(() => {
    lastUserRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [issueChat, lastUserRef]);

  // React.useEffect(() => {
  //   const updateAllChatSuccess = (response: Array<Message>): void => {
  //     dispatch(updateAllChat(response));
  //   };

  //   socket.on('update-chat', updateAllChatSuccess);

  //   return (): void => {
  //     socket.off('update-chat', updateAllChatSuccess);
  //   };
  // });

  return (
    <div className={styles.Chat_wrap}>
      <div className={styles.Chat_cards}>
        {issueChat.length > 0
          && issueChat.map((item, index) => (
            <div className={styles.Chat_card} key={item.userId + index}>
              <IssueChatScoreCard />
              <IssueChatUserCard
                userId={item.userId}
                firstName={item.firstName}
                lastName={item.lastName}
                role={item.role}
                job={item.jobPosition}
              />
            </div>
          ))}
        <div ref={lastUserRef}></div>
      </div>
    </div>
  );
};

export default ChatToVoteOnIssue;

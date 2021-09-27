import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import TitleSection from '../../components/TitleSection/TitleSection';
import CardUser from '../../components/CardUser/CardUser';
import CardIssueGame from '../../components/CardIssueGame/CardIssueGame';
import CardGame from '../../components/CardGame/CardGame';
import ChatToVoteOnIssue from '../../components/ChatToVoteOnIssue/ChatToVoteOnIssue';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import { initIssueChat, issueIdSelectedSlice, updateIssueChat } from '../../redux/slices/gameProcessSlice';
import { selectIssues } from '../../redux/slices/issuesSlice';
import { adminSlice, allUsersSlice } from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import { Member, ResponseFromSocket } from '../../types/common';
import IssueChatUserCard from '../../components/IssueChatUserCard/IssueChatUserCard';

import styles from './GamePage.module.scss';

const GamePage: FC = () => {
  const dispatch = useDispatch();

  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const users = useSelector(allUsersSlice);
  const admin = useSelector(adminSlice);
  const issues = useSelector(selectIssues);
  const cards = useSelector(selectGameCards);
  const settings = useSelector(selectGameSetting);
  const issueIdSelected = useSelector(issueIdSelectedSlice);
  const issueSelected = issues[Number(issueIdSelected)];

  console.log('settings', settings);

  React.useEffect(() => {
    const isAdminPlayer = settings.masterIsPlayer;
    const payload = { isAdminPlayer, admin, users };
    dispatch(initIssueChat(payload));
  }, [admin, dispatch, settings.masterIsPlayer, users]);

  React.useEffect(() => {
    const updateIssuesChatSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { vote: responseVote } = data;
        dispatch(updateIssueChat(responseVote));
      }
    };

    socket.on('update-voting-results', updateIssuesChatSuccess);

    return (): void => {
      socket.off('update-voting-results', updateIssuesChatSuccess);
    };
  });

  return (
    <div className={styles.game_wrap}>
      <div className={styles.game_container}>
        <TitleSection
          title={`Planning (issues: ${issues
            .map((is) => is.title)
            .filter((is, id) => id < 4)
            .join(', ')}${issues.length > 5 && ', ...'})`}
          isCapitalLetters
        />
        <div className={styles.game_content}>
          <div className={styles.game_issueBar}>
            <p>Scram master:</p>
            <CardUser userId={admin.userId} firstName={admin.firstName} lastName={admin.lastName} role={admin.role} />
            <TitleSection title={'issues:'} />
            {/* eslint-disable-next-line operator-linebreak */}
            {issues.length > 0 && issues.map((item) => <CardIssueGame key={item.id} id={item.id} title={item.title} />)}
          </div>
          <div className={styles.game_body}>
            {issueSelected && (
              <>
                <TitleSection title={issueSelected.title} />
                <div>{issueSelected.desc}</div>
                <TitleSection title={'please, make your choise:'} />
                {/* eslint-disable-next-line operator-linebreak */}
                {cards && cards.map((card) => <CardGame key={card.id} card={card} issue={issueSelected} />)}
                <TitleSection title={'statistics:'} />
                {/* <div className={styles.statistics}>
                  {process.resForStat.map((issue) => {
                    const hundred = issue.cards.reduce((acc, card) => acc + card.usersId.length, 0);

                    return (
                      <p key={issue.issueId}>
                        {issue.issueId}
                        <span>
                          {issue.cards.map((card) => (
                            <p key={card.cardId}>
                              {card.cardId} = {(card.usersId.length * 100) / hundred}%
                            </p>
                          ))}
                        </span>
                      </p>
                    );
                  })}
                </div> */}
                <TitleSection title={'members:'} />
                <div>
                  <IssueChatUserCard
                    userId={admin.userId}
                    firstName={admin.firstName}
                    lastName={admin.lastName}
                    role={admin.role}
                    job={admin.job}
                  />
                  {users.map((user: Member) => (
                    <IssueChatUserCard
                      key={user.userId}
                      userId={user.userId}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      role={user.role}
                      job={user.job}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className={styles.game_vote}>
            <ChatToVoteOnIssue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

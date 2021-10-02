import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useHistory } from 'react-router-dom';
import TitleSection from '../../components/TitleSection/TitleSection';
import CardUser from '../../components/CardUser/CardUser';
import CardIssueGame from '../../components/CardIssueGame/CardIssueGame';
import CardGame from '../../components/CardGame/CardGame';
import ChatToVoteOnIssue from '../../components/ChatToVoteOnIssue/ChatToVoteOnIssue';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import {
  initIssueChat,
  initStatisticsCards,
  isLateModalOpenSlice,
  isPlayingNowSlice,
  isShowResultOfVotingSlice,
  issueIdSelectedSlice,
  selectedIssue,
  setIsLateModalOpen,
  setIsPlayingNow,
  setIsShowResultOfVoting,
  setLateUser,
  statisticsCardsSlice,
  updateIssueChatAndStatistics,
} from '../../redux/slices/gameProcessSlice';
import { selectIssues } from '../../redux/slices/issuesSlice';
import {
  adminSlice,
  allUsersSlice,
  currentRoomSlice,
  currentUserSlice,
  isAdminSlice,
  updateMembers,
} from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import { Member, ResponseFromSocket } from '../../types/common';
import IssueChatUserCard from '../../components/IssueChatUserCard/IssueChatUserCard';
import StatisticsCard from '../../components/StatisticsCard/StatisticsCard';
import RunRoundButton from '../../components/RunRoundButton/RunRoundButton';
import StopRoundButton from '../../components/StopRoundButton/StopRoundButton';
import { COUNT_MILLISECONDS_IN_SECOND } from '../../constants';

import styles from './GamePage.module.scss';
import exitToMainPage from '../../utils/exit';
import ShowResultsButton from '../../components/ShowResultsButton/ShowResultsButton';
import { initStatistics } from '../../redux/slices/statisticsSlice';
import IsLateModal from '../../components/IsLateModal/IsLateModal';

const GamePage: FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const room = useSelector(currentRoomSlice);
  const users = useSelector(allUsersSlice);
  const admin = useSelector(adminSlice);
  const isAdmin = useSelector(isAdminSlice);
  const issues = useSelector(selectIssues);
  const cards = useSelector(selectGameCards);
  const statisticsCards = useSelector(statisticsCardsSlice);
  const settings = useSelector(selectGameSetting);
  const isPlayingNow = useSelector(isPlayingNowSlice);
  const issueIdSelected = useSelector(issueIdSelectedSlice);
  const isShowResultOfVoting = useSelector(isShowResultOfVotingSlice);
  const isLateModalOpen = useSelector(isLateModalOpenSlice);
  const currentUser = useSelector(currentUserSlice);

  const issueSelected = issues[Number(issueIdSelected)];
  const isNeedTimer = settings.isNeededTimer;

  React.useEffect(() => {
    if (!admin.firstName) {
      history.push('/');
      exitToMainPage();
    }
  });

  React.useEffect(() => {
    const isAdminPlayer = settings.masterIsPlayer;
    const payload = { isAdminPlayer, admin, users };
    dispatch(initIssueChat(payload));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  React.useEffect(() => {
    const updateUsersSuccess = (response: Member): void => {
      if (response.userId !== currentUser.userId) {
        console.log('admin-added-later-in-game', response);

        dispatch(updateMembers(response));
      }
    };

    socket.on('admin-added-later-in-game', updateUsersSuccess);

    return (): void => {
      socket.off('admin-added-later-in-game', updateUsersSuccess);
    };
  });

  React.useEffect(() => {
    const updateSelectedIssueIdSuccess = (response: string): void => {
      console.log('round-is-starting', response);

      if (!isAdmin) dispatch(selectedIssue(response));
      const isAdminPlayer = settings.masterIsPlayer;
      const payload = { isAdminPlayer, admin, users };
      dispatch(initIssueChat(payload));
      dispatch(setIsPlayingNow(true));
      dispatch(setIsShowResultOfVoting(false));
      dispatch(initStatisticsCards(cards));
    };

    socket.on('round-is-starting', updateSelectedIssueIdSuccess);

    return (): void => {
      socket.off('round-is-starting', updateSelectedIssueIdSuccess);
    };
  });

  React.useEffect(() => {
    const updateIssuesChatAndStatisticsSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { vote: responseVote } = data;
        dispatch(updateIssueChatAndStatistics(responseVote));
      }
    };

    socket.on('update-voting-results', updateIssuesChatAndStatisticsSuccess);

    return (): void => {
      socket.off('update-voting-results', updateIssuesChatAndStatisticsSuccess);
    };
  });

  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (isPlayingNow && isNeedTimer) {
      const timer = setTimeout(() => {
        dispatch(setIsPlayingNow(false));
        dispatch(setIsShowResultOfVoting(true));
      }, settings.roundTime * COUNT_MILLISECONDS_IN_SECOND);

      return (): void => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, isNeedTimer, isPlayingNow, settings.roundTime]);

  React.useEffect(() => {
    const setLateUserSuccess = (response: ResponseFromSocket): void => {
      if (isAdmin) {
        console.log(response);
        const { eventName, code, error: responseError, data } = response;

        // eslint-disable-next-line no-console
        if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
        else {
          const { user: responseUser } = data;
          dispatch(setLateUser(responseUser));
          dispatch(setIsLateModalOpen(true));
        }
      }
    };

    socket.on('late-user-logged-in', setLateUserSuccess);

    return (): void => {
      socket.off('late-user-logged-in', setLateUserSuccess);
    };
  });

  React.useEffect(() => {
    const setStatisticsSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { statistics: responseStatistics } = data;
        dispatch(initStatistics({ responseStatistics, issues, storyType: settings.storyType }));
        history.push('/result');
      }
    };

    socket.on('get-statistics', setStatisticsSuccess);

    return (): void => {
      socket.off('get-statistics', setStatisticsSuccess);
    };
  });

  React.useEffect(() => {
    if (isShowResultOfVoting && isAdmin) {
      const callback = (response: ResponseFromSocket): void => {
        console.log('send-statistics', response);

        const { eventName, code, error: responseError } = response;

        // eslint-disable-next-line no-console
        if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      };

      socket.emit('send-statistics', room, issueIdSelected, statisticsCards, callback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowResultOfVoting]);

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
            {issues.length > 0 && issues.map((item) => <CardIssueGame key={item.id} id={item.id} title={item.title} />)}
          </div>
          <div className={styles.game_body}>
            {issueSelected && (
              <>
                <TitleSection title={issueSelected.title} />
                <div>{issueSelected.desc}</div>
                {isAdmin && !isPlayingNow && <RunRoundButton />}
                {isAdmin && isPlayingNow && <StopRoundButton />}
                {isAdmin && <ShowResultsButton />}
                {isNeedTimer && <p>Here must be timer</p>}
                <TitleSection title={'please, make your choise:'} />
                {cards && cards.map((card) => <CardGame key={card.id} card={card} />)}
                <TitleSection title={'statistics:'} />
                {statisticsCards && statisticsCards.map((card) => <StatisticsCard key={card.id} card={card} />)}
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
      {isLateModalOpen && <IsLateModal />}
    </div>
  );
};

export default GamePage;

import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { Socket } from 'socket.io-client';
import CardUser from '../../components/CardUser/CardUser';
import Chat from '../../components/Chat/Chat';
import TitleSection from '../../components/TitleSection/TitleSection';
import LobbyScramButtons from '../../components/LobbyScramButtons/LobbyScramButtons';
import LobbyMembers from '../../components/LobbyMembers/LobbyMembers';
import LobbyIssues from '../../components/LobbyIssues/LobbyIssues';
import LobbySetting from '../../components/LobbySetting/LobbySetting';
import KickModal from '../../components/KickModal/KickModal';
import {
  isModalOpenSlice,
  setIsModalOpen,
  setIsModalOpenBySocketEvent,
  setKickId,
  setWhoKick,
  setWhoWillBeKicked,
} from '../../redux/slices/kickSlice';
import {
  adminSlice,
  allUsersSlice,
  currentRoomSlice,
  deleteMember,
  initRoom,
  updateMembers,
} from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import { ResponseFromSocket } from '../../types/common';

import styles from './LobbyPage.module.scss';

interface Props {
  issues?: { issueId: string }[];
  cards?: { value: string | number }[];
  link: string;
}

const LobbyPage: FC<Props> = ({ issues, link, cards }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const room = useSelector(currentRoomSlice);
  const admin = useSelector(adminSlice);
  const users = useSelector(allUsersSlice);
  const isKickModalOpen = useSelector(isModalOpenSlice);

  React.useEffect(() => {
    const updateAllChatSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;
      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { user: responseUser } = data;
        dispatch(deleteMember(responseUser));
      }
    };

    socket.on('delete-kicked-user', updateAllChatSuccess);

    return (): void => {
      socket.off('delete-kicked-user', updateAllChatSuccess);
    };
  });

  React.useEffect(() => {
    const updateMembersSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;

      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { user: responseUser } = data;
        dispatch(updateMembers(responseUser));
      }
    };

    socket.on('add-member', updateMembersSuccess);

    return (): void => {
      socket.off('add-member', updateMembersSuccess);
    };
  });

  React.useEffect(() => {
    const callback = (response: ResponseFromSocket): void => {
      console.log(response);

      const { eventName, code, error: responseError, data } = response;

      if (responseError) {
        // eslint-disable-next-line no-console
        console.log(`${eventName}: ${code}: ${responseError}`);
        history.push('/');
      } else {
        const { users: responseUsers } = data;
        dispatch(initRoom(responseUsers));
      }
    };

    socket.emit('get-all-users-in-room', { room }, callback);
  }, [dispatch, history, room, socket]);

  React.useEffect(() => {
    const kickUserSuccess = (response: ResponseFromSocket): void => {
      console.log(response);
      const { eventName, code, error: responseError, data } = response;
      // eslint-disable-next-line no-console
      if (responseError) console.log(`${eventName}: ${code}: ${responseError}`);
      else {
        const { kick: responseKick } = data;
        dispatch(setWhoKick(responseKick.whoKick));
        dispatch(setWhoWillBeKicked(responseKick.whoWillBeKicked));
        dispatch(setKickId(responseKick.kickId));
        dispatch(setIsModalOpenBySocketEvent(true));
        dispatch(setIsModalOpen(true));
      }
    };

    socket.on('do-you-want-kick-user', kickUserSuccess);

    return (): void => {
      socket.off('do-you-want-kick-user', kickUserSuccess);
    };
  });

  return (
    <div className={styles.lobbyPage_wrap}>
      <div className={styles.lobbyPage_container}>
        <TitleSection title={'Poker Planning'} isCapitalLetters />
        <div className={styles.lobbyPage_section}>
          <p>Scram master:</p>
        </div>
        <div className={styles.lobbyPage_section}>
          <CardUser
            userId={admin.userId}
            firstName={admin.firstName}
            lastName={admin.lastName}
            jobPosition={admin.job}
            role={admin.role}
          />
        </div>
        <LobbyScramButtons link={link} />
        <LobbyMembers users={users} />
        <LobbyIssues />
        <LobbySetting />
      </div>
      <Chat />
      {isKickModalOpen && <KickModal />}
    </div>
  );
};

export default LobbyPage;

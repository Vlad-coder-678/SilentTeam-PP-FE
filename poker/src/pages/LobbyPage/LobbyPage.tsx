import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import CardUser, { userProps } from '../../components/CardUser/CardUser';
import Chat from '../../components/Chat/Chat';
import TitleSection from '../../components/TitleSection/TitleSection';
import LobbyScramButtons from '../../components/LobbyScramButtons/LobbyScramButtons';
import LobbyMembers from '../../components/LobbyMembers/LobbyMembers';
import LobbyIssues from '../../components/LobbyIssues/LobbyIssues';
import LobbySetting from '../../components/LobbySetting/LobbySetting';
import { admin } from '../../__mocks__/mockRoom';
import KickModal from '../../components/KickModal/KickModal';
import { isModalOpenSlice } from '../../redux/slices/kickSlice';

import styles from './LobbyPage.module.scss';

interface Props {
  users: userProps[];
  link: string;
}

const LobbyPage: FC<Props> = ({ users, link }) => {
  const isKickModalOpen = useSelector(isModalOpenSlice);

  return (
    <div className={styles.lobbyPage_wrap}>
      <div className={styles.lobbyPage_container}>
        <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
        <div className={styles.lobbyPage_section}>
          <p>Scram master:</p>
        </div>
        <div className={styles.lobbyPage_section}>
          <CardUser
            firstName={admin.firstName}
            lastName={admin.lastName}
            jobPosition={admin.jobPosition}
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

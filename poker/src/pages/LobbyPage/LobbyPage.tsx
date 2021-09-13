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

import styled from './LobbyPage.module.scss';

interface Props {
  users: userProps[];
  issues?: { issueId: number }[];
  cards?: { value: string | number }[];
  link: string;
}

const LobbyPage: FC<Props> = ({ users, issues, link, cards }) => {
  const isKickModalOpen = useSelector(isModalOpenSlice);

  return (
    <div className={styled.lobbyPage_wrap}>
      <div className={styled.lobbyPage_container}>
        <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
        <div className={styled.lobbyPage_section}>
          <p>Scram master:</p>
        </div>
        <div className={styled.lobbyPage_section}>
          <CardUser name={admin.name} surname={admin.surname} jobPosition={admin.jobPosition} role={admin.role} />
        </div>
        <LobbyScramButtons link={link} />
        <LobbyMembers users={users} />
        <LobbyIssues issues={issues} />
        <LobbySetting cards={cards} />
      </div>
      <Chat />
      {isKickModalOpen && <KickModal />}
    </div>
  );
};

export default LobbyPage;

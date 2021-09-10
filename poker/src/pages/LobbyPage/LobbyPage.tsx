import React, { FC } from 'react';

import CardUser, { userProps } from '../../components/CardUser/CardUser';
import Chat from '../../components/Chat/Chat';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import TitleSection from '../../components/TitleSection/TitleSection';

import styled from './LobbyPage.module.scss';

interface Props {
  roomId: number;
  users: userProps[];
  issues?: { issueId: number }[];
  link: string;
}

const LobbyPage: FC<Props> = ({ roomId, users, link }) => (
  <div className={styled.lobbyPage_wrap}>
    <div className={styled.lobbyPage_container}>
      <h2>Room {roomId}</h2>
      <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
      <div className={styled.lobbyPage_section}>
        <p>Scram master:</p>
      </div>
      <div className={styled.lobbyPage_section}>
        <CardUser
          key={users[0].name}
          name={users[0].name}
          surname={users[0].surname}
          jobPosition={users[0].jobPosition}
        />
      </div>
      <div className={styled.lobbyPage_section_link}>
        <h3>Link to lobby:</h3>
        <div className={styled.lobbyPage_location}>
          <p>{link}asdklasjdkjskdjkl</p>
          <GeneralButton label={'Copy'} primaryBG />
        </div>
      </div>
      <div className={styled.lobbyPage_section_button}>
        <GeneralButton label={'Start Game'} primaryBG />
        <GeneralButton label={'Cancel Game'} />
      </div>
      <TitleSection title={'members:'} />
      <div className={styled.lobbyPage_section}>
        {users
          .filter((u, i) => i !== 0)
          .map((user: userProps) => (
            <CardUser key={user.name} name={user.name} surname={user.surname} jobPosition={user.jobPosition} />
          ))}
      </div>
    </div>
    <Chat />
  </div>
);

export default LobbyPage;

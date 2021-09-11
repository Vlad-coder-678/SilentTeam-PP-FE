import React, { FC } from 'react';

import CardUser, { userProps } from '../CardUser/CardUser';
import TitleSection from '../TitleSection/TitleSection';

import styled from './LobbyMembers.module.scss';

interface Props {
  users: userProps[];
}

const LobbyMembers: FC<Props> = ({ users }) => (
  <div>
    <TitleSection title={'Members:'} />
    <div className={styled.lobbyPage_section}>
      {users
        .filter((u, i) => i !== 0)
        .map((user: userProps) => (
          <CardUser key={user.name} name={user.name} surname={user.surname} jobPosition={user.jobPosition} />
        ))}
    </div>
  </div>
);

export default LobbyMembers;

import React, { FC } from 'react';

import CardUser, { userProps } from '../CardUser/CardUser';
import TitleSection from '../TitleSection/TitleSection';

import styles from './LobbyMembers.module.scss';

interface Props {
  users: userProps[];
}

const LobbyMembers: FC<Props> = ({ users }) => (
  <div>
    <TitleSection title={'Members:'} />
    <div className={styles.lobbyPage_section}>
      {users.map((user: userProps) => (
        <CardUser
          key={user.name}
          name={user.name}
          surname={user.surname}
          jobPosition={user.jobPosition}
          role={user.role}
        />
      ))}
    </div>
  </div>
);

export default LobbyMembers;

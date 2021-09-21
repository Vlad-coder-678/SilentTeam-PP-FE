import React, { FC } from 'react';
import { Member } from '../../types/common';
import CardUser, { userProps } from '../CardUser/CardUser';
import TitleSection from '../TitleSection/TitleSection';

import styles from './LobbyMembers.module.scss';

interface Props {
  users: Array<Member>;
}

const LobbyMembers: FC<Props> = ({ users }) => (
  <div>
    <TitleSection title={'Members:'} />
    <div className={styles.lobbyPage_section}>
      {users.map((user: Member) => (
        <CardUser
          key={user.firstName}
          userId={user.userId}
          firstName={user.firstName}
          lastName={user.lastName}
          jobPosition={user.job}
          role={user.role}
        />
      ))}
    </div>
  </div>
);

export default LobbyMembers;

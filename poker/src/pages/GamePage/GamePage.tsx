import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import TitleSection from '../../components/TitleSection/TitleSection';
import CardUser from '../../components/CardUser/CardUser';
import { ROLES } from '../../types/common';
import CardIssue from '../../components/CardIssue/CardIssue';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import { selectIssues } from '../../redux/slices/issuesSlice';

import styles from './GamePage.module.scss';

interface Props {
  user?: { firstName: string; lastName: string; jobPosition: string; role: string };
}

const GamePage: FC<Props> = () => {
  const issues = useSelector(selectIssues);

  return (
    <div>
      <div className={styles.lobbyPage_container}>
        <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
        <div className={styles.lobbyPage_section}>
          <p>Scram master:</p>
        </div>
        <div className={styles.lobbyPage_section}>
          <CardUser
            firstName={'user.firstName'}
            lastName={'user.lastName'}
            jobPosition={'user.jobPosition'}
            role={ROLES.ADMIN}
          />
          <GeneralButton type="button" label="StopGame" />
        </div>
        {issues.map((item) => (
          <div className={styles.lobbyPage_section}>
            <CardIssue issue={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;

import React, { FC } from 'react';

import TitleSection from '../TitleSection/TitleSection';
import CardIssue from '../CardIssue/CardIssue';

import styles from './LobbyIssues.module.scss';

interface Props {
  issues?: { issueId: string }[];
}

const LobbyIssues: FC<Props> = ({ issues }) => (
  <div>
    <TitleSection title={'Issues:'} />
    <div className={styles.lobbyPage_section}>
      {issues && issues.map((issue) => <CardIssue key={issue.issueId} issueId={issue.issueId} />)}
      <CardIssue isNew />
    </div>
  </div>
);

export default LobbyIssues;

import React, { FC } from 'react';

import TitleSection from '../TitleSection/TitleSection';
import CardIssue from '../CardIssue/CardIssue';

import styled from './LobbyIssues.module.scss';

interface Props {
  issues?: { issueId: number }[];
}

const LobbyIssues: FC<Props> = ({ issues }) => (
  <div>
    <TitleSection title={'Issues:'} />
    <div className={styled.lobbyPage_section}>
      {issues && issues.map((issue) => <CardIssue issueId={issue.issueId} />)}
      <CardIssue isNew />
    </div>
  </div>
);

export default LobbyIssues;

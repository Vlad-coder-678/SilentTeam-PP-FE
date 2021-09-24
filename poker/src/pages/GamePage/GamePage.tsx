import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import TitleSection from '../../components/TitleSection/TitleSection';
import CardUser from '../../components/CardUser/CardUser';
import CardIssueGame from '../../components/CardIssueGame/CardIssueGame';
import CardGame from '../../components/CardGame/CardGame';
import ChatToVoteOnIssue from '../../components/ChatToVoteOnIssue/ChatToVoteOnIssue';

// import { selectIssues } from '../../redux/slices/issuesSlice';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import { selectGameProcess } from '../../redux/slices/gameProcessSlice';
import mockIssues from '../../__mocks__/mockIssues';
import mockRoom from '../../__mocks__/mockRoom';
import type { issueGame } from '../../types/common';

import styles from './GamePage.module.scss';

const GamePage: FC = () => {
  // const issues = useSelector(selectIssues);
  const issues: issueGame[] = mockIssues; // mock
  const cards = useSelector(selectGameCards);
  const settings = useSelector(selectGameSetting);
  const process = useSelector(selectGameProcess);
  const issueSelected = issues[Number(process.issueIdSelected)];

  const userId = '123'; // mock
  const admin = mockRoom.users[0]; // mock

  return (
    <div className={styles.game_wrap}>
      <div className={styles.game_container}>
        <TitleSection
          title={`Planning (issues: ${issues
            .map((is) => is.title)
            .filter((is, id) => id < 4)
            .join(', ')}${issues.length > 5 && ', ...'})`}
          isCapitalLetters
        />
        <div className={styles.game_content}>
          <div className={styles.game_issueBar}>
            <p>Scram master:</p>
            <CardUser userId={admin.userId} firstName={admin.firstName} lastName={admin.lastName} role={admin.role} />
            <TitleSection title={'issues:'} />
            {/* eslint-disable-next-line operator-linebreak */}
            {issues.length > 0 &&
              issues.map((item, index) => (
                <CardIssueGame
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  isChecked={index === Number(issueSelected.id)}
                />
              ))}
          </div>
          <div className={styles.game_body}>
            {issueSelected && (
              <>
                <TitleSection title={issueSelected.title} />
                <div>{issueSelected.desc}</div>
                <TitleSection title={'please, make your choise:'} />
                {/* eslint-disable-next-line operator-linebreak */}
                {cards &&
                  cards.map((card, index) => (
                    <CardGame
                      key={card.id}
                      card={card}
                      issue={issueSelected}
                      title={settings.storyTypeShort}
                      isChecked={process.userGameResults.some(
                        (res) => issueSelected.id === res.issueId && index === Number(res.cardId),
                      )}
                      userId={userId}
                    />
                  ))}
                <TitleSection title={'statistics:'} />
                <div className={styles.statistics}>
                  {process.resForStat.map((issue) => {
                    const hundred = issue.cards.reduce((acc, card) => acc + card.usersId.length, 0);

                    return (
                      <p key={issue.issueId}>
                        {issue.issueId}
                        <span>
                          {issue.cards.map((card) => (
                            <p key={card.cardId}>
                              {card.cardId} = {(card.usersId.length * 100) / hundred}%
                            </p>
                          ))}
                        </span>
                      </p>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className={styles.game_vote}>
            <ChatToVoteOnIssue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

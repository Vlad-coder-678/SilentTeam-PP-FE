import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import TitleSection from '../../components/TitleSection/TitleSection';
import CardUser from '../../components/CardUser/CardUser';
import CardIssueGame from '../../components/CardIssueGame/CardIssueGame';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import CardGame from '../../components/CardGame/CardGame';

// import { selectIssues } from '../../redux/slices/issuesSlice';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import { selectGameProcess } from '../../redux/slices/gameProcessSlice';
import mockIssues from '../../__mocks__/mockIssues';
import { admin } from '../../__mocks__/mockRoom';
import type { issueGame } from '../../types/common';

import styles from './GamePage.module.scss';

const GamePage: FC = () => {
  // const issues = useSelector(selectIssues);
  const issues: issueGame[] = mockIssues;
  const cards = useSelector(selectGameCards);
  const settings = useSelector(selectGameSetting);
  const process = useSelector(selectGameProcess);
  const issueSelected = issues[Number(process.issueIdSelected)];

  return (
    <div className={styles.game_wrap}>
      <div className={styles.game_container}>
        <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
        <div className={styles.game_content}>
          <div className={styles.game_issueBar}>
            <p>Scram master:</p>
            <CardUser
              firstName={admin.firstName}
              lastName={admin.lastName}
              jobPosition={admin.jobPosition}
              role={admin.role}
            />
            <TitleSection title={'issues:'} />
            {issues.length > 0
              && issues.map((item, index) => (
                <CardIssueGame
                  key={item.id}
                  id={item.id}
                  title={item.number}
                  isChecked={index === Number(issueSelected.id)}
                />
              ))}
          </div>
          <div className={styles.game_body}>
            {issueSelected && (
              <>
                <TitleSection title={issueSelected.number} />
                <div>{issueSelected.desc}</div>
                <TitleSection title={'please, make your choise:'} />
                {cards
                  && cards.map((card, index) => (
                    <CardGame
                      key={card.id}
                      card={card}
                      issue={issueSelected}
                      title={settings.storyTypeShort}
                      isChecked={process.gameUserResults.some(
                        (res) => issueSelected.id === res.issueId && index === Number(res.cardId),
                      )}
                    />
                  ))}
                <TitleSection title={'ststistics:'} />
              </>
            )}
            <GeneralButton type="button" label="StopGame" />
          </div>
          <div className={styles.game_vote}>
            <h3>Vote</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

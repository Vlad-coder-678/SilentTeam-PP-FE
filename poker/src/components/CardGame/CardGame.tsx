import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import { CardGameSetting, issueGame } from '../../types/common';
import { selectedCard, addToOverallResults, selectGameProcess } from '../../redux/slices/gameProcessSlice';

import styles from './CardGame.module.scss';

interface Props {
  card: CardGameSetting;
  issue: issueGame;
  title: string;
  isChecked: boolean;
  userId: string;
}

const CardGame: FC<Props> = ({ card, issue, title, isChecked, userId }) => {
  const process = useSelector(selectGameProcess);
  const dispatch = useDispatch();

  const handleSelectedCard = (): void => {
    dispatch(selectedCard({ issueId: issue.id, cardId: card.id }));
  };

  useEffect(() => {
    dispatch(addToOverallResults({ userId, res: process.userGameResults }));
  }, [dispatch, process, userId]);

  return (
    <div className={isChecked ? styles.card_wrapSelected : styles.card_wrap} onClick={handleSelectedCard}>
      {card.value === 'coffeetime' ? (
        <div className={styles.card_coffeetime}>
          <img src={coffeetime} alt="cap of coffee" />
        </div>
      ) : (
        <div className={styles.card_value}>
          <p className={styles.card_value_top}>{card.value}</p>
          <h3>{title}</h3>
          <p className={styles.card_value_bottom}>{card.value}</p>
        </div>
      )}
    </div>
  );
};

export default CardGame;

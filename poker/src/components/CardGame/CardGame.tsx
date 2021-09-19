import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import { CardGameSetting, issueGame } from '../../types/common';
import { selectedCard } from '../../redux/slices/gameProcessSlice';

import styles from './CardGame.module.scss';

interface Props {
  card: CardGameSetting;
  issue: issueGame;
  title: string;
  isChecked: boolean;
}

const CardGame: FC<Props> = ({ card, issue, title, isChecked }) => {
  const dispatch = useDispatch();

  const handleSelectedCard = (): void => {
    dispatch(selectedCard({ issueId: issue.id, cardId: card.id }));
  };

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

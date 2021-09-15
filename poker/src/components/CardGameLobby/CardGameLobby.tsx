import React, { useState, FC } from 'react';

import plus from '../../assets/images/svg/plus.svg';
import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import pencil from '../../assets/images/svg/pencil.svg';
import styles from './CardGameLobby.module.scss';

import { CardGame } from '../../types/common';

interface Props {
  card: CardGame;
  isNew?: boolean;
}

const CardGameLobby: FC<Props> = ({ card, isNew }) => {
  const [isVisibleInput, setIsVisibleInput] = useState(false);

  const handleToggleVisible = (): void => {
    setIsVisibleInput(!isVisibleInput);
  };

  const handleCreateCard = (): void => {
    console.log('create new card');
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.Card_wrap}>
      {card.value === 'coffeetime' && (
        <div className={styles.Card_coffeetime}>
          <img src={coffeetime} alt="cap of coffee" />
        </div>
      )}
      {Number(card.value) >= 0 && !isNew && (
        <div className={styles.Card_value}>
          <p className={styles.Card_value_top}>{card.value}</p>
          {isVisibleInput ? (
            <input onChange={handleChangeValue} onBlur={handleToggleVisible} />
          ) : (
            <img src={pencil} alt="pencil" onClick={handleToggleVisible} />
          )}
          <p className={styles.Card_value_bottom}>{card.value}</p>
        </div>
      )}
      {isNew && (
        <div className={styles.Card_new} onClick={handleCreateCard}>
          <img src={plus} alt="add new card" />
        </div>
      )}
    </div>
  );
};

export default CardGameLobby;

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import { CardGameSetting, SIZES } from '../../types/common';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import playCardCoverImg from '../../assets/images/png/play-card-cover.png';

import styles from './Card.module.scss';

interface Props {
  card: CardGameSetting;
  isShowCards: boolean;
  size: SIZES;
}

const Card: FC<Props> = ({ card, isShowCards, size }) => {
  const { storyTypeShort: title } = useSelector(selectGameSetting);

  return (
    <div className={`${styles[size]}`}>
      {isShowCards && card.value === 'coffeetime' && (
        <div className={styles.card_coffeetime}>
          <img src={coffeetime} alt="cap of coffee" />
        </div>
      )}

      {isShowCards && card.value !== 'coffeetime' && (
        <div className={styles.card_value}>
          <p className={styles.card_value_top}>{card.value}</p>
          <h3>{title}</h3>
          <p className={styles.card_value_bottom}>{card.value}</p>
        </div>
      )}

      {!isShowCards && <img src={playCardCoverImg} alt="cover of card" />}
    </div>
  );
};

export default Card;

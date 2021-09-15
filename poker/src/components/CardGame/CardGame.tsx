import React, { FC } from 'react';
import plus from '../../assets/images/svg/plus.svg';
import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import pencil from '../../assets/images/svg/pencil.svg';
import styles from './CardGame.module.scss';

interface Props {
  value?: string | number;
  isNew?: boolean;
  isSelected?: boolean;
  isConfig?: boolean;
}

const CardGame: FC<Props> = ({ value, isNew, isSelected, isConfig }) => {
  const handleAddNewCard = (): void => {
    console.log('create new card');
  };

  const handleChangeValue = (): void => {
    console.log('change value');
  };

  const handleSelected = (): void => {
    console.log('change selected');
  };

  return (
    <div className={isSelected ? styles.Card_wrap_selected : styles.Card_wrap}>
      {isNew && (
        <div className={styles.Card_new} onClick={handleAddNewCard}>
          <img src={plus} alt="add new card" />
        </div>
      )}
      {typeof value === 'string' && (
        <div className={styles.Card_coffeetime} onClick={handleSelected}>
          <img src={coffeetime} alt="cap of coffee" />
        </div>
      )}
      {typeof value === 'number' && (
        <div className={styles.Card_value} onClick={isConfig ? handleChangeValue : handleSelected}>
          <p className={styles.Card_value_top}>{value}</p>
          {isConfig ? <img src={pencil} alt="pencil" /> : <h2>'SP'</h2>}
          <p className={styles.Card_value_bottom}>{value}</p>
        </div>
      )}
    </div>
  );
};

export default CardGame;

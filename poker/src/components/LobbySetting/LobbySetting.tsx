import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import TitleSection from '../TitleSection/TitleSection';
import Checkbox from '../Checkbox/Checkbox';
import InputComponent from '../InputComponent/InputComponent';
import CardGameLobby from '../CardGameLobby/CardGameLobby';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';

import styles from './LobbySetting.module.scss';

const LobbySetting: FC = () => {
  const cards = useSelector(selectGameCards);
  const newCard = {
    id: (cards.reduce((max, item) => Math.max(max, Number(item.id)), 0) + 1).toString(),
    value: (Number(cards[cards.length - 1].value) * 2).toString(),
  };

  const handleChangeMasterOrPlayer = (): void => {
    console.log('master or player');
  };

  const handleChangeCardInRoundEnd = (): void => {
    console.log('change card in round end');
  };

  const handleChangeTimerNeeded = (): void => {
    console.log('handle change timer needed');
  };

  const handleChangeScrollType = (): void => {
    console.log('handle change scroll type');
  };

  const handleChangeScrollTypeShort = (): void => {
    console.log('handle change scroll type short');
  };

  const handleChangeRoundTime = (): void => {
    console.log('handle change round time');
  };

  return (
    <div className={styles.lobbyPage_section}>
      <TitleSection title={'Game settings:'} />
      <div className={styles.lobbyPage_setting_item}>
        <p>Scram master as player:</p>
        <Checkbox name={'master/player'} onChange={handleChangeMasterOrPlayer} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Changing card in round end:</p>
        <Checkbox name={'isChangeCardInRoundEnd'} onChange={handleChangeCardInRoundEnd} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Is timer needed:</p>
        <Checkbox name={'isTimerNeeded'} onChange={handleChangeTimerNeeded} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Scroll type:</p>
        <InputComponent name={'scrollType'} onChange={handleChangeScrollType} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Scroll type(Short):</p>
        <InputComponent name={'scrollTypeShort'} onChange={handleChangeScrollTypeShort} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Round time:</p>
        <InputComponent name={'roundTime'} onChange={handleChangeRoundTime} />
      </div>
      <div className={styles.lobbyPage_setting_item}>
        <p>Add card values:</p>
      </div>
      <div className={styles.lobbyPage_setting_cards}>
        {cards.length > 0 && cards.map((card) => <CardGameLobby key={card.id} card={card} />)}
        <CardGameLobby card={newCard} isNew />
      </div>
    </div>
  );
};

export default LobbySetting;

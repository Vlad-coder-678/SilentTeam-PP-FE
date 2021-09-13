import React, { FC } from 'react';

import TitleSection from '../TitleSection/TitleSection';
import Checkbox from '../Checkbox/Checkbox';
import InputComponent from '../InputComponent/InputComponent';
import CardGame from '../CardGame/CardGame';

import styled from './LobbySetting.module.scss';

interface Props {
  cards?: { value: string | number }[];
}

const LobbySetting: FC<Props> = ({ cards }) => {
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
    <div className={styled.lobbyPage_section}>
      <TitleSection title={'Game settings:'} />
      <div className={styled.lobbyPage_setting_item}>
        <p>Scram master as player:</p>
        <Checkbox name={'master/player'} onChange={handleChangeMasterOrPlayer} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Changing card in round end:</p>
        <Checkbox name={'isChangeCardInRoundEnd'} onChange={handleChangeCardInRoundEnd} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Is timer needed:</p>
        <Checkbox name={'isTimerNeeded'} onChange={handleChangeTimerNeeded} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Scroll type:</p>
        <InputComponent name={'scrollType'} onChange={handleChangeScrollType} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Scroll type(Short):</p>
        <InputComponent name={'scrollTypeShort'} onChange={handleChangeScrollTypeShort} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Round time:</p>
        <InputComponent name={'roundTime'} onChange={handleChangeRoundTime} />
      </div>
      <div className={styled.lobbyPage_setting_item}>
        <p>Add card values:</p>
      </div>
      <div className={styled.lobbyPage_setting_cards}>
        {cards && cards.map((card) => <CardGame key={card.value} value={card.value} isConfig />)}
        <CardGame isNew />
      </div>
    </div>
  );
};

export default LobbySetting;

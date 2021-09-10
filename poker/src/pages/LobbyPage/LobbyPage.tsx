import React, { FC } from 'react';

import CardUser, { userProps } from '../../components/CardUser/CardUser';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import TitleSection from '../../components/TitleSection/TitleSection';
import CardIssue from '../../components/CardIssue/CardIssue';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputComponent from '../../components/InputComponent/InputComponent';
import CardGame from '../../components/CardGame/CardGame';

import styled from './LobbyPage.module.scss';

interface Props {
  roomId: number;
  users: userProps[];
  issues?: { issueId: number }[];
  cards?: { value: string | number }[];
  link: string;
}

const LobbyPage: FC<Props> = ({ roomId, users, issues, link, cards }) => {
  const handleChangeMasterOrPlayer = () => {
    console.log('master or player');
  };

  return (
    <div className={styled.lobbyPage_container}>
      <h2>Room {roomId}</h2>
      <TitleSection title={'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)'} />
      <div className={styled.lobbyPage_section}>
        <p>Scram master:</p>
      </div>
      <div className={styled.lobbyPage_section}>
        <CardUser
          key={users[0].name}
          name={users[0].name}
          surname={users[0].surname}
          jobPosition={users[0].jobPosition}
        />
      </div>
      <div className={styled.lobbyPage_section_link}>
        <h3>Link to lobby:</h3>
        <div className={styled.lobbyPage_location}>
          <p>{link}asdklasjdkjskdjkl</p>
          <GeneralButton label={'Copy'} primaryBG />
        </div>
      </div>
      <div className={styled.lobbyPage_section_button}>
        <GeneralButton label={'Start Game'} primaryBG />
        <GeneralButton label={'Cancel Game'} />
      </div>
      <TitleSection title={'Members:'} />
      <div className={styled.lobbyPage_section}>
        {users
          .filter((u, i) => i !== 0)
          .map((user: userProps) => (
            <CardUser key={user.name} name={user.name} surname={user.surname} jobPosition={user.jobPosition} />
          ))}
      </div>
      <TitleSection title={'Issues:'} />
      <div className={styled.lobbyPage_section}>
        {issues && issues.map((issue) => <CardIssue issueId={issue.issueId} />)}
        <CardIssue isNew />
      </div>
      <TitleSection title={'Game settings:'} />
      <div className={styled.lobbyPage_section}>
        <div className={styled.lobbyPage_setting_item}>
          <p>Scram master as player:</p>
          <Checkbox name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Changing card in round end:</p>
          <Checkbox name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Is timer needed:</p>
          <Checkbox name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Scroll type:</p>
          <InputComponent name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Scroll type(Short):</p>
          <InputComponent name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Round time:</p>
          <InputComponent name={'master/player'} onChange={handleChangeMasterOrPlayer} />
        </div>
        <div className={styled.lobbyPage_setting_item}>
          <p>Add card values:</p>
        </div>
        <div className={styled.lobbyPage_setting_cards}>
          {cards && cards.map((card) => <CardGame value={card.value} isConfig />)}
          <CardGame isNew />
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;

import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import coffeetime from '../../assets/images/svg/cap_of_coffee.svg';
import { CardGameSetting, Issue } from '../../types/common';
import { selectedCard, currentUserGameResultsSlice, issueIdSelectedSlice } from '../../redux/slices/gameProcessSlice';
import { selectGameSetting } from '../../redux/slices/gameSettingSlice';
import { currentRoomSlice, currentUserSlice } from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';

import styles from './CardGame.module.scss';

interface Props {
  card: CardGameSetting;
  issue: Issue;
}

const CardGame: FC<Props> = ({ card, issue }) => {
  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const dispatch = useDispatch();

  const room = useSelector(currentRoomSlice);
  const { userId } = useSelector(currentUserSlice);
  const issueIdSelected = useSelector(issueIdSelectedSlice);
  const { storyTypeShort: title } = useSelector(selectGameSetting);
  const currentUserGameResults = useSelector(currentUserGameResultsSlice);
  const isChecked = currentUserGameResults.some((item) => issueIdSelected === item.issueId && card.id === item.cardId);

  const handleSelectedCard = (): void => {
    dispatch(selectedCard({ issueId: issue.id, cardId: card.id }));
    socket.emit('user-check-game-card', room, userId, issueIdSelected, card.id, card.value);
  };

  // useEffect(() => {
  //   dispatch(addResForVote({ userId, res: process.userGameResults }));
  // }, [dispatch, process.userGameResults, userId]);

  // useEffect(() => {
  //   dispatch(addResForStat(process.resForVote));
  // }, [dispatch, process.resForVote]);

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

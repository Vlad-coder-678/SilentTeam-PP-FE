import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { selectGameCards } from '../../redux/slices/gameCardsSlice';
import { issueIdSelectedSlice } from '../../redux/slices/gameProcessSlice';
import { selectIssues } from '../../redux/slices/issuesSlice';
import { currentRoomSlice } from '../../redux/slices/roomSlice';
import { SocketContext } from '../../socketContext';
import GeneralButton from '../GeneralButton/GeneralButton';

const RunRoundButton: FC = () => {
  const socket = React.useContext<Socket<DefaultEventsMap, DefaultEventsMap>>(SocketContext);

  const room = useSelector(currentRoomSlice);
  const issues = useSelector(selectIssues);
  const cards = useSelector(selectGameCards);
  const issueIdSelected = useSelector(issueIdSelectedSlice);

  const handleRunRound = (): void => {
    socket.emit('run-round', room, issueIdSelected);
  };

  return (
    <GeneralButton
      type="button"
      label={'RunRound'}
      primaryBG
      onClick={handleRunRound}
      isDisable={issues.length === 0 || cards.length < 3}
    />
  );
};

export default RunRoundButton;

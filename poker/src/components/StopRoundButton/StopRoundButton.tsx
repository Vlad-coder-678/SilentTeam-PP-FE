import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setIsPlayingNow, setIsShowResultOfVoting } from '../../redux/slices/gameProcessSlice';
import GeneralButton from '../GeneralButton/GeneralButton';

const StopRoundButton: FC = () => {
  const dispatch = useDispatch();

  const handleStopRound = (): void => {
    dispatch(setIsPlayingNow(false));
    dispatch(setIsShowResultOfVoting(true));
  };

  return <GeneralButton type="button" label={'Stop Round'} primaryBG onClick={handleStopRound} />;
};

export default StopRoundButton;

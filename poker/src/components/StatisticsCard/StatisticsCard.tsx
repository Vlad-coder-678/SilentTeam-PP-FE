import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { StatisticCard } from '../../types/common';
import { isShowResultOfVotingSlice } from '../../redux/slices/gameProcessSlice';
import Card from '../Card/Card';

interface Props {
  card: StatisticCard;
}

const StatisticsCard: FC<Props> = ({ card }) => {
  const isShowResultOfVoting = useSelector(isShowResultOfVotingSlice);

  return (
    <div>
      <Card card={card} isShowCards={isShowResultOfVoting} />
      <p>{card.scoreInPercent} %</p>
    </div>
  );
};

export default StatisticsCard;

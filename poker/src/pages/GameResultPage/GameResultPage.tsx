import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { allStatisticsSlice } from '../../redux/slices/statisticsSlice';

const GameResultPage: FC = () => {
  const statistics = useSelector(allStatisticsSlice);

  console.log('statistics', statistics);

  return (
    <div>
      <h2>GameResultPage</h2>
    </div>
  );
};

export default GameResultPage;

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DownloadCSVButton from '../../components/DownloadCSVButton/DownloadCSVButton';
import ExitFromResultPageButton from '../../components/ExitFromResultPageButton/ExitFromResultPageButton';
import { allStatisticsSlice } from '../../redux/slices/statisticsSlice';
import exitToMainPage from '../../utils/exit';

const GameResultPage: FC = () => {
  const history = useHistory();

  const statistics = useSelector(allStatisticsSlice);

  console.log('statistics', statistics);

  React.useEffect(() => {
    if (statistics.length === 0) {
      history.push('/');
      exitToMainPage();
    }
  });

  return (
    <div>
      <h2>GameResultPage</h2>
      <DownloadCSVButton />
      <ExitFromResultPageButton />
    </div>
  );
};

export default GameResultPage;

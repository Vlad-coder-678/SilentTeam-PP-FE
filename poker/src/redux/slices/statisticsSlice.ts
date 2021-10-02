import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatisticsResultItem } from '../../types/common';
import type { RootState } from '../store';

interface StatisticsState {
  statistics: Array<StatisticsResultItem>;
}

const initialState: StatisticsState = {
  statistics: [],
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    initStatistics: (state, action: PayloadAction<Array<StatisticsResultItem>>) => {
      state.statistics = action.payload;
    },
  },
});

export const { initStatistics } = statisticsSlice.actions;

export const allStatisticsSlice = (state: RootState): Array<StatisticsResultItem> => state.statistics.statistics;

export default statisticsSlice.reducer;

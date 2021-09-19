import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { GameProcessInit, issueSelected } from '../../types/common';

const initialState: GameProcessInit = {
  issueIdSelected: '',
  gameUserResults: [],
};

export const gameProcessSlice = createSlice({
  name: 'gameProcess',
  initialState,
  reducers: {
    selectedIssue: (state, action: PayloadAction<string>) => {
      state.issueIdSelected = action.payload;
    },
    selectedCard: (state, action: PayloadAction<issueSelected>) => {
      const ap = action.payload;
      const arrRes = state.gameUserResults;
      const len = arrRes.length;
      if (arrRes.some((res) => res.issueId === ap.issueId)) {
        for (let i = 0; i < len; i++) if (arrRes[i].issueId === ap.issueId) arrRes[i].cardId = ap.cardId;
      } else arrRes.push({
        issueId: ap.issueId,
        cardId: ap.cardId,
      });
    },
  },
});

export const { selectedIssue, selectedCard } = gameProcessSlice.actions;

// in the file use: `useSelector((state: RootState) => state.value)`
export const selectGameProcess = (state: RootState): GameProcessInit => state.gameProcess;

export default gameProcessSlice.reducer;

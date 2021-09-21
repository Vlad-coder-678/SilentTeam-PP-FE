import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { GameProcessInit, issueSelected } from '../../types/common';

const initialState: GameProcessInit = {
  issueIdSelected: '0',
  userGameResults: [],
  overallGameResults: [],
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
      const arrRes = state.userGameResults;
      const len = arrRes.length;
      if (arrRes.some((res) => res.issueId === ap.issueId)) {
        for (let i = 0; i < len; i++) if (arrRes[i].issueId === ap.issueId) arrRes[i].cardId = ap.cardId;
      } else arrRes.push({
        issueId: ap.issueId,
        cardId: ap.cardId,
      });
    },
    addToOverallResults: (state, action: PayloadAction<{ userId: string; res: issueSelected[] }>) => {
      const ap = action.payload;
      const ovRes = state.overallGameResults;
      if (ovRes.some((res) => res.userId === ap.userId)) {
        const len = ovRes.length;
        for (let i = 0; i < len; i++) if (ovRes[i].userId === ap.userId) {
          ovRes[i].res = ap.res;
          break;
        }
      } else ovRes.push({ userId: ap.userId, res: ap.res });
    },
  },
});

export const { selectedIssue, selectedCard, addToOverallResults } = gameProcessSlice.actions;

// in the file use: `useSelector((state: RootState) => state.value)`
export const selectGameProcess = (state: RootState): GameProcessInit => state.gameProcess;

export default gameProcessSlice.reducer;

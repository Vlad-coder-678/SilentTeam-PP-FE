import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { GameProcessInit, issueSelected } from '../../types/common';

const initialState: GameProcessInit = {
  issueIdSelected: '0',
  userGameResults: [],
  resForVote: [],
  resForStat: [],
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
      const usRes = state.userGameResults;
      const len = usRes.length;
      if (usRes.some((res) => res.issueId === ap.issueId)) {
        for (let i = 0; i < len; i++) if (usRes[i].issueId === ap.issueId) usRes[i].cardId = ap.cardId;
      } else {
        const res = { issueId: ap.issueId, cardId: ap.cardId };
        usRes.push(res);
      }
    },
    addResForVote: (state, action: PayloadAction<{ userId: string; res: issueSelected[] }>) => {
      const ap = action.payload;
      const voteRes = state.resForVote;
      if (voteRes.some((res) => res.userId === ap.userId)) {
        const len = voteRes.length;
        for (let i = 0; i < len; i++) {
          const isThisUser = voteRes[i].userId === ap.userId;
          if (isThisUser) {
            voteRes[i].res = ap.res;
            break;
          }
        }
      } else voteRes.push({ userId: ap.userId, res: ap.res });
    },
    addResForStat: (state, action: PayloadAction<{ userId: string; res: issueSelected[] }[]>) => {
      const ap = action.payload;
      const temp: { userId: string; cardId: string; issueId: string }[] = [];
      ap.map((r) => r.res.map((it) => temp.push({ userId: r.userId, cardId: it.cardId, issueId: it.issueId })));
      temp.sort((a, b) => Number(a.issueId) - Number(b.issueId));
      state.resForStat = [];
      const stRes = state.resForStat;
      const tLen = temp.length;
      for (let i = 0; i < tLen; i++) {
        const isStateHaveThisIssue = stRes.some((is) => is.issueId === temp[i].issueId);
        if (isStateHaveThisIssue) {
          const rLen = stRes.length;
          for (let j = 0; j < rLen; j++) {
            const isIssueHaveThisCard = stRes[j].cards.some((card) => card.cardId === temp[i].cardId);
            if (isIssueHaveThisCard) {
              const rcLen = stRes[j].cards.length;
              for (let k = 0; k < rcLen; k++) {
                const isThisCard = stRes[j].cards[k].cardId === temp[i].cardId;
                if (isThisCard) stRes[j].cards[k].usersId.push(temp[i].userId);
              }
            } else {
              const card = { cardId: temp[i].cardId, usersId: [temp[i].userId] };
              stRes[i].cards.push(card);
            }
          }
        } else {
          const issue = { issueId: temp[i].issueId, cards: [{ cardId: temp[i].cardId, usersId: [temp[i].userId] }] };
          stRes.push(issue);
        }
      }
    },
  },
});

export const { selectedIssue, selectedCard, addResForVote, addResForStat } = gameProcessSlice.actions;

// in the file use: `useSelector((state: RootState) => state.value)`
export const selectGameProcess = (state: RootState): GameProcessInit => state.gameProcess;

export default gameProcessSlice.reducer;

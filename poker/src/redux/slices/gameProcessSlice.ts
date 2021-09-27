import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IssueChatItem, IssueSelected, Member, ROLES } from '../../types/common';
import type { RootState } from '../store';

interface GameProcessInit {
  issueIdSelected: string;
  currentUserGameResults: IssueSelected[];
  issueChat: IssueChatItem[];
  resForVote: { userId: string; res: IssueSelected[] }[];
  resForStat: { issueId: string; cards: { cardId: string; usersId: string[] }[] }[];
}

const initialState: GameProcessInit = {
  issueIdSelected: '0',
  currentUserGameResults: [],
  issueChat: [],
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
    selectedCard: (state, action: PayloadAction<IssueSelected>) => {
      const ap = action.payload;
      const usRes = state.currentUserGameResults;
      const len = usRes.length;
      if (usRes.some((res) => res.issueId === ap.issueId)) {
        for (let i = 0; i < len; i++) if (usRes[i].issueId === ap.issueId) usRes[i].cardId = ap.cardId;
      } else {
        const res = { issueId: ap.issueId, cardId: ap.cardId };
        usRes.push(res);
      }
    },
    initIssueChat: (state, action: PayloadAction<{ isAdminPlayer: boolean; admin: Member; users: Member[] }>) => {
      const { isAdminPlayer, admin, users } = action.payload;
      const usersFromLobby = [...users];
      if (isAdminPlayer) usersFromLobby.unshift(admin);
      const usersInIssueChat: IssueChatItem[] = usersFromLobby.reduce((res: IssueChatItem[], user) => {
        if (user.role !== ROLES.OBSERVER) res.push({ ...user, value: '' });
        return res;
      }, []);
      state.issueChat = usersInIssueChat;
    },
    updateIssueChat: (
      state,
      action: PayloadAction<{ userId: string; issueId: string; cardId: string; cardValue: string }>,
    ) => {
      const { userId, issueId, cardValue } = action.payload;
      if (issueId === state.issueIdSelected) {
        const newIssueChat = state.issueChat.map((item) => {
          if (item.userId === userId) return { ...item, value: cardValue };
          return item;
        });
        state.issueChat = newIssueChat;
      }
    },

    // addResForVote: (state, action: PayloadAction<{ userId: string; res: IssueSelected[] }>) => {
    //   const ap = action.payload;
    //   const voteRes = state.resForVote;
    //   if (voteRes.some((res) => res.userId === ap.userId)) {
    //     const len = voteRes.length;
    //     for (let i = 0; i < len; i++) {
    //       const isThisUser = voteRes[i].userId === ap.userId;
    //       if (isThisUser) {
    //         voteRes[i].res = ap.res;
    //         break;
    //       }
    //     }
    //   } else voteRes.push({ userId: ap.userId, res: ap.res });
    // },
    // addResForStat: (state, action: PayloadAction<{ userId: string; res: IssueSelected[] }[]>) => {
    //   const ap = action.payload;
    //   const temp: { userId: string; cardId: string; issueId: string }[] = [];
    //   ap.map((r) => r.res.map((it) => temp.push({ userId: r.userId, cardId: it.cardId, issueId: it.issueId })));
    //   temp.sort((a, b) => Number(a.issueId) - Number(b.issueId));
    //   state.resForStat = [];
    //   const stRes = state.resForStat;
    //   const tLen = temp.length;
    //   for (let i = 0; i < tLen; i++) {
    //     const isStateHaveThisIssue = stRes.some((is) => is.issueId === temp[i].issueId);
    //     if (isStateHaveThisIssue) {
    //       const rLen = stRes.length;
    //       for (let j = 0; j < rLen; j++) {
    //         const isIssueHaveThisCard = stRes[j].cards.some((card) => card.cardId === temp[i].cardId);
    //         if (isIssueHaveThisCard) {
    //           const rcLen = stRes[j].cards.length;
    //           for (let k = 0; k < rcLen; k++) {
    //             const isThisCard = stRes[j].cards[k].cardId === temp[i].cardId;
    //             if (isThisCard) stRes[j].cards[k].usersId.push(temp[i].userId);
    //           }
    //         } else {
    //           const card = { cardId: temp[i].cardId, usersId: [temp[i].userId] };
    //           stRes[i].cards.push(card);
    //         }
    //       }
    //     } else {
    //       const issue = { issueId: temp[i].issueId, cards: [{ cardId: temp[i].cardId, usersId: [temp[i].userId] }] };
    //       stRes.push(issue);
    //     }
    //   }
    // },
  },
});

export const {
  selectedIssue,
  selectedCard,
  initIssueChat,
  updateIssueChat,
  // addResForVote, addResForStat
} = gameProcessSlice.actions;

export const selectGameProcess = (state: RootState): GameProcessInit => state.gameProcess;
export const issueIdSelectedSlice = (state: RootState): string => state.gameProcess.issueIdSelected;
export const currentUserGameResultsSlice = (state: RootState): IssueSelected[] =>
  state.gameProcess.currentUserGameResults;
export const issueChatSlice = (state: RootState): IssueChatItem[] => state.gameProcess.issueChat;

export default gameProcessSlice.reducer;

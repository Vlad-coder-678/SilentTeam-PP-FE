import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardGameSetting, IssueChatItem, Member, ROLES, StatisticCard } from '../../types/common';
import type { RootState } from '../store';

interface GameProcessInit {
  issueIdSelected: string;
  currentUserCheckCardWithId: string;
  issueChat: IssueChatItem[];
  isPlayingNow: boolean;
  isShowResultOfVoting: boolean;
  statisticsCards: StatisticCard[];
}

const initialState: GameProcessInit = {
  issueIdSelected: '0',
  currentUserCheckCardWithId: '',
  issueChat: [],
  isPlayingNow: false,
  isShowResultOfVoting: false,
  statisticsCards: [],
};

export const gameProcessSlice = createSlice({
  name: 'gameProcess',
  initialState,
  reducers: {
    selectedIssue: (state, action: PayloadAction<string>) => {
      state.issueIdSelected = action.payload;
    },
    selectedCard: (state, action: PayloadAction<string>) => {
      state.currentUserCheckCardWithId = action.payload;
    },
    initIssueChat: (state, action: PayloadAction<{ isAdminPlayer: boolean; admin: Member; users: Member[] }>) => {
      const { isAdminPlayer, admin, users } = action.payload;
      const usersFromLobby = [...users];
      if (isAdminPlayer) usersFromLobby.unshift(admin);
      const usersInIssueChat: IssueChatItem[] = usersFromLobby.reduce((res: IssueChatItem[], user) => {
        if (user.role !== ROLES.OBSERVER) res.push({ ...user, value: '-' });
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
    setIsPlayingNow: (state, action: PayloadAction<boolean>) => {
      state.isPlayingNow = action.payload;
    },
    setIsShowResultOfVoting: (state, action: PayloadAction<boolean>) => {
      state.isShowResultOfVoting = action.payload;
    },
    initStatisticsCards: (state, action: PayloadAction<Array<CardGameSetting>>) => {
      const cards = action.payload;
      state.statisticsCards = cards.map((card) => ({ ...card, scoreInPercent: 0 }));
    },
  },
});

export const {
  selectedIssue,
  selectedCard,
  initIssueChat,
  updateIssueChat,
  setIsPlayingNow,
  setIsShowResultOfVoting,
  initStatisticsCards,
} = gameProcessSlice.actions;

export const issueIdSelectedSlice = (state: RootState): string => state.gameProcess.issueIdSelected;
export const currentUserCheckCardWithIdSlice = (state: RootState): string => state.gameProcess
.currentUserCheckCardWithId;
export const issueChatSlice = (state: RootState): IssueChatItem[] => state.gameProcess.issueChat;
export const statisticsCardsSlice = (state: RootState): StatisticCard[] => state.gameProcess.statisticsCards;
export const isPlayingNowSlice = (state: RootState): boolean => state.gameProcess.isPlayingNow;
export const isShowResultOfVotingSlice = (state: RootState): boolean => state.gameProcess.isShowResultOfVoting;

export default gameProcessSlice.reducer;

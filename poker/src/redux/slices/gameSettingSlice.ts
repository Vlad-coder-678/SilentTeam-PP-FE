import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { GameSettingsInit } from '../../types/common';

const initialState: GameSettingsInit = {
  masterIsPlayer: true,
  isChangeCard: false,
  isNeededTimer: true,
  storyType: '',
  storyTypeShort: '',
  roundTime: 60,
};

export const gameSettingSlice = createSlice({
  name: 'gameConfig',
  initialState,
  reducers: {
    changeMasterIsPlayer: (state) => {
      const isPlayer = !state.masterIsPlayer;
      return { ...state, masterIsPlayer: isPlayer };
    },
    isChangeCard: (state) => {
      const mop = !state.isChangeCard;
      return { ...state, isChangeCard: mop };
    },
    changeIsNeededTimer: (state) => {
      const isNeeded = !state.isNeededTimer;
      return { ...state, isNeededTimer: isNeeded };
    },
    changeStoryType: (state, action: PayloadAction<string>) => {
      state.storyType = action.payload;
    },
    changeStoryTypeShort: (state, action: PayloadAction<string>) => {
      state.storyTypeShort = action.payload
        .split(' ')
        .map((u, i) => (u.length > 0 && i < 3 ? u[0].toUpperCase() : ''))
        .join('');
    },
    changeRoundTime: (state, action: PayloadAction<number>) => {
      state.roundTime = action.payload;
    },
  },
});

export const {
  changeMasterIsPlayer,
  isChangeCard,
  changeIsNeededTimer,
  changeStoryType,
  changeStoryTypeShort,
  changeRoundTime,
} = gameSettingSlice.actions;

// in the file use: `useSelector((state: RootState) => state.value)`
export const selectgameSetting = (state: RootState): GameSettingsInit => state.gameSettings;

export default gameSettingSlice.reducer;

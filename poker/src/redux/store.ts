import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';
import kickReducer from './slices/kickSlice';
import roomReducer from './slices/roomSlice';
import issuesReducer from './slices/issuesSlice';
import gameCardsReducer from './slices/gameCardsSlice';
import gameSettingsReducer from './slices/gameSettingSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    kick: kickReducer,
    room: roomReducer,
    issues: issuesReducer,
    gameCards: gameCardsReducer,
    gameSettings: gameSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>> | void;

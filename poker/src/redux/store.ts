import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import chatReducer from './slices/chatSlice';
import kickReducer from './slices/kickSlice';
import socketErrorReducer from './slices/socketErrorSlice';
import issuesReducer from './slices/issuesSlice';
import gameCardsReducer from './slices/gameCardsSlice';
import gameSettingsReducer from './slices/gameSettingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
    kick: kickReducer,
    socketError: socketErrorReducer,
    issues: issuesReducer,
    gameCards: gameCardsReducer,
    gameSettings: gameSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>> | void;

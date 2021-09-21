import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';
import kickReducer from './slices/kickSlice';
import roomReducer from './slices/roomSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    kick: kickReducer,
    room: roomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>> | void;

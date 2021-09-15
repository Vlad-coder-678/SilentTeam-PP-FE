import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import chatReducer from './slices/chatSlice';
import kickReducer from './slices/kickSlice';
import socketErrorReducer from './slices/socketErrorSlice';
import issuesReducer from './slices/issuesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
    kick: kickReducer,
    socketError: socketErrorReducer,
    issues: issuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>> | void;

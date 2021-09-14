import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../../types/common';
import type { RootState } from '../store';

interface ChatState {
  chat: Array<Message>;
}

const initialState: ChatState = {
  chat: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateChat: (state, action: PayloadAction<Message>) => {
      state.chat.push(action.payload);
    },
  },
});

export const { updateChat } = chatSlice.actions;

export const chatMessagesSlice = (state: RootState): Array<Message> => state.chat.chat;

export default chatSlice.reducer;

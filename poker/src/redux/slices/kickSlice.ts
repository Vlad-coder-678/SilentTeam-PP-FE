import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface KickState {
  isModalOpen: boolean;
  isModalCallFromServer: boolean;
}

const initialState: KickState = {
  isModalOpen: false,
  isModalCallFromServer: false,
};

export const kickSlice = createSlice({
  name: 'kick',
  initialState,
  reducers: {
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setIsModalCallFromServer: (state, action: PayloadAction<boolean>) => {
      state.isModalCallFromServer = action.payload;
    },
  },
});

export const { setIsModalOpen, setIsModalCallFromServer } = kickSlice.actions;

export const isModalOpenSlice = (state: RootState): boolean => state.kick.isModalOpen;
export const isModalCallFromServerSlice = (state: RootState): boolean => state.kick.isModalCallFromServer;

export default kickSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardGame } from '../../types/common';
import type { RootState } from '../store';

const initialState: CardGame[] = [
  { id: '0', value: 'coffeetime' },
  { id: '1', value: '0' },
  { id: '2', value: '1' },
  { id: '3', value: '5' },
  { id: '4', value: '10' },
  { id: '5', value: '20' },
];

export const gameCardsSlice = createSlice({
  name: 'gameCards',
  initialState,
  reducers: {
    createGC: (state, action: PayloadAction<CardGame>) => {
      state.push(action.payload);
    },
    fixGC: (state, action: PayloadAction<CardGame>) =>
      state.map((u) => (u.id !== action.payload.id ? u : action.payload)),
    removeGC: (state, action: PayloadAction<CardGame>) => state.filter((u) => u.id !== action.payload.id),
  },
});

export const { createGC, fixGC, removeGC } = gameCardsSlice.actions;

// in the file use: `useSelector((state: RootState) => state.value)`
export const selectGameCards = (state: RootState): CardGame[] => state.gameCards;

export default gameCardsSlice.reducer;

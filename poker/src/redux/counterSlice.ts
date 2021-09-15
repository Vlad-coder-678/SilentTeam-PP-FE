import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from './store';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Async
export function incrementAsync(amount: number): AppThunk {
  return (dispatch: (arg0: { payload: number; type: string }) => void): void => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
}

// in the file use: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;

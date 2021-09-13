import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SocketError } from '../../types/common';

interface SocketErrorState {
  error: SocketError;
}

const initialState: SocketErrorState = {
  error: {
    status: 0,
    error: '',
    eventName: '',
  },
};

export const errorSlice = createSlice({
  name: 'socketError',
  initialState,
  reducers: {
    setSocketError: (state, action: PayloadAction<SocketError>) => {
      state.error = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setSocketError } = errorSlice.actions;

export default errorSlice.reducer;

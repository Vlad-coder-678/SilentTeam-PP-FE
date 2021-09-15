import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/common';
import type { RootState } from '../store';

interface userState {
  user: Array<User>;
}

const initialState: userState = {
  user: [],
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
      updateUser: (state, action: PayloadAction<User>) => {
        state.user.push(action.payload);
      },
  },
});

export const { updateUser } = userReducer.actions;

export const userSlice = (state: RootState): Array<User> => state.user.user;

export default userReducer.reducer;

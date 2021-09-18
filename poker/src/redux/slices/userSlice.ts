import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, ROLES } from '../../types/common';
import type { RootState } from '../store';

interface userState {
  user: User;
}

const initialState: userState = {
  user: {
    lastName: '',
    firstName: '',
    jobPosition: '',
    role: ROLES.ADMIN,
    room: '',
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const userDataSlice = (state: RootState): User => state.user.user;

export default userSlice.reducer;

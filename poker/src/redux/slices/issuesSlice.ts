import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from '../../types/common';
import type { RootState } from '../store';

const initialState: Issue[] = [];

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    createIs: (state, action: PayloadAction<Issue>) => {
      state.push(action.payload);
    },
    fixIs: (state, action: PayloadAction<Issue>) => state.map((u) => (u.id !== action.payload.id ? u : action.payload)),
    removeIs: (state, action: PayloadAction<Issue>) => state.filter((u) => u.id !== action.payload.id),
  },
});

export const { createIs, fixIs, removeIs } = issuesSlice.actions;

// in the file use: `useSelector((state: RootState) => state.counter.value)`
export const selectIssues = (state: RootState): Issue[] => state.issues;

export default issuesSlice.reducer;

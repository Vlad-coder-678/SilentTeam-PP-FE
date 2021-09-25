import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from '../../types/common';
import type { RootState } from '../store';

const initialState: Issue[] = [];

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setIssues: (state, action: PayloadAction<Array<Issue>>) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    },
    createIs: (state, action: PayloadAction<Issue>) => {
      state.push(action.payload);
    },
    fixIs: (state, action: PayloadAction<Issue>) => state.map((u) => (u.id !== action.payload.id ? u : action.payload)),
    removeIs: (state, action: PayloadAction<Issue>) => state.filter((u) => u.id !== action.payload.id),
  },
});

export const { setIssues, createIs, fixIs, removeIs } = issuesSlice.actions;

export const selectIssues = (state: RootState): Issue[] => state.issues;

export default issuesSlice.reducer;

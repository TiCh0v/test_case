// postSelectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const selectPosts = (state: RootState) => state.posts.posts;

export const selectPostById = (id: number) => 
  createSelector([selectPosts], (posts) => posts.find(post => post.id === id));

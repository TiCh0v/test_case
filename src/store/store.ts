
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postsReducer from '@/features/posts/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();

export default store;

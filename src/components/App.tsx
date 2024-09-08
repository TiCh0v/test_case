import { useEffect } from 'react';

import { useAppDispatch } from '@/store/store';
import { loadPostsFromLocalStorage, fetchPosts } from '@/features/posts/postsSlice';

import Navbar from '@/wigdets/Navbar/Navbar';
import { Outlet } from 'react-router-dom';





export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPostsFromLocalStorage());

    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  );
};

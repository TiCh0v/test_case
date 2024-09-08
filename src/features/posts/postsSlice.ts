import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


export interface Post {
  id: number;
  title: string;
  body: string;
  like: boolean;
  photoUrl?: string;
  thumbnailUrl?: string;
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}


const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};


const savePostToLocalStorage = (post: Post) => {
  const savedPosts = localStorage.getItem('posts');
  const posts = savedPosts ? JSON.parse(savedPosts) : [];

  const updatedPosts = posts.filter((p: Post) => p.id !== post.id);
  updatedPosts.push(post);
  localStorage.setItem('posts', JSON.stringify(updatedPosts));
};

const removePostFromLocalStorage = (postId: number) => {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) {
    const posts = JSON.parse(savedPosts);
    const updatedPosts = posts.filter((post: Post) => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  }
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=30');
  const data = await response.json();
  return data.map((photo: any) => ({
    id: photo.id,
    title: photo.title,
    body: `Description for photo ${photo.id}`,
    like: false,
    photoUrl: photo.url,
    thumbnailUrl: photo.thumbnailUrl
  }));
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
      savePostToLocalStorage(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
      removePostFromLocalStorage(action.payload);
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.like = !post.like;
        savePostToLocalStorage(post); 
      }
    },
    loadPostsFromLocalStorage: (state) => {
      const savedPosts = localStorage.getItem('posts');
      if (savedPosts) {
        state.posts = JSON.parse(savedPosts);
      }
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
        savePostToLocalStorage(action.payload);
      }
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = [...state.posts, ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load posts';
      });
  },
});

export const { addPost, deletePost, toggleLike, loadPostsFromLocalStorage, updatePost } = postsSlice.actions;

export default postsSlice.reducer;

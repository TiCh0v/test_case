import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch} from '@/store/store';
import { useSelector } from 'react-redux';

import { selectPostById } from '@/features/posts/postselectors';
import { updatePost } from '@/features/posts/postsSlice'; 
import './EditPage.scss';

const EditPage = () => {
  const { id } = useParams(); 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const postId = id ? parseInt(id) : 0;
  const post = useSelector(selectPostById(postId));

  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [thumbnailUrl, setThumbnailUrl] = useState(post?.thumbnailUrl || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setThumbnailUrl(post.thumbnailUrl || '');
    }
  }, [post]);

  const handleUpdatePost = () => {
    if (!title || !body) {
      setError('Title and body are required.');
      return;
    }

    const updatedPost = {
      id: postId,
      title,
      body,
      like: post?.like || false,
      photoUrl: post?.photoUrl || '',
      thumbnailUrl: thumbnailUrl || '',
    };

    dispatch(updatePost(updatedPost));
    navigate('/products');
  };

  return (
    <div className="edit-post-page">
      <h1>Edit Post</h1>
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
          placeholder="image URL (optional)"
        />
      </div>
      <button onClick={handleUpdatePost}>Update Post</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EditPage;

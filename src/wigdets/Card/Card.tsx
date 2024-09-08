import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';
import { useAppDispatch } from '@/store/store';
import { toggleLike, deletePost } from '@/features/posts/postsSlice';
import Heart from '@/assets/heart-fill.svg';
import HeartOutline from '@/assets/heart.svg';
import Edit from '@/assets/pencil-square.svg';
import Trash from '@/assets/trash-fill.svg';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';

interface CardProps {
  id: number;
  title: string;
  body: string;
  like: boolean;
  photoUrl?: string;
  thumbnailUrl?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { id, title, body, like, photoUrl, thumbnailUrl } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  const savePostsToLocalStorage = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = savedPosts.map((post: any) =>
      post.id === id ? { ...post, like: !like } : post
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(toggleLike(id));
    savePostsToLocalStorage();
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deletePost(id));
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = savedPosts.filter((post: any) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/edit/${id}`);
  };



  return (
    <div className="card" onClick={handleNavigate}>
      <div className="card_image-container">
        {!imageLoaded && <Skeleton />}
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt=""
            className="card_image-thumbnail"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
          />
        )}
      </div>
      <div className="card_innerContainer">
        <p className="card_title">{title}</p>
        <p className="card_body">{body}</p>
      </div>
      <div className="card_buttonsContainer">
        {like ? 
          <Heart width={20} height={20} color={"red"} onClick={handleLike}/> :
          <HeartOutline width={20} height={20} color={"gray"} onClick={handleLike}/> 
        }
        <Trash width={20} height={20} color={"gray"} onClick={handleDelete}/>
        <Edit width={20} height={20} color={"gray"} onClick={handleEdit}/>
      </div>
    </div>
  );
};

export default Card;

import { useState } from "react";
import { useAppDispatch } from "@/store/store";
import { addPost } from "@/features/posts/postsSlice";
import "./CreatePage.scss";

const CreatePostPage = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [error, setError] = useState("");

  const validateInput = (input: string) => {
    const regex = /^[a-zA-Z0-9\s\-._~:\/?#[\]@!$&'()*+,;=]*$/;
    return regex.test(input);
  };

  const checkImageSize = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        if (img.width === 150 && img.height === 150) {
          resolve(true);
        } else {
          resolve(false);
        }
      };
      img.onerror = reject;
      img.src = url;
    });
  };

  const handleCreatePost = async () => {
    if (!title || !body) {
      setError("Title and body are required.");
      return;
    }
    
    if (!validateInput(title) || !validateInput(body) || (thumbnailUrl && !validateInput(thumbnailUrl))) {
      setError("Invalid characters in input. Use EN symbols");
      return;
    }

    try {
      if (thumbnailUrl) {
        const isThumbnailValid = await checkImageSize(thumbnailUrl);
        if (!isThumbnailValid) {
          setError("Image must be 150x150 pixels.");
          return;
        }
      }

      setError(""); 

      const newPost = {
        id: Date.now(), 
        title,
        body,
        like: false,
        photoUrl: "",
        thumbnailUrl: thumbnailUrl || "",
      };

      dispatch(addPost(newPost));
      
      setTitle("");
      setBody("");
      setThumbnailUrl("");
    } catch (err) {
      setError("Error checking image size.");
    }
  };

  return (
    <div className="create-post-page">
      <h1>Create a New Post</h1>
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
          placeholder="Image url (optional)"
        />
      </div>
      <button onClick={handleCreatePost}>Create Post</button>
      {error && <p className="error">{error}</p>}
      <div>используйте изображения 150*150 для теста. к примеру любое изображение из карточки продукта</div>
    </div>
  );
};

export default CreatePostPage;

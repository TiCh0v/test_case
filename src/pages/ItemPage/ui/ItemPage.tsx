import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Card from "@/wigdets/Card/Card";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>(); 
  const post = useSelector((state: RootState) =>
    state.posts.posts.find((post) => post.id === Number(id))
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <Card
        id={post.id}
        title={post.title}
        body={post.body}
        like={post.like}
        photoUrl={post.photoUrl}
        thumbnailUrl={post.thumbnailUrl}
      />
    </div>
  );
};

export default ItemPage;

import PostItem from "../components/PostItem";
import fakePosts from "../utils/fakePosts";

const HomePage = () => {
  return (
    <>
      {fakePosts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
};

export default HomePage;

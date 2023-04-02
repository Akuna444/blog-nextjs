function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((data) => (
        <PostItem />
      ))}
    </ul>
  );
}

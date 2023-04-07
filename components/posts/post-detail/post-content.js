import classes from "./post-content.module.css";

import PostHeader from "./post-header";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
    </article>
  );
}

export default PostContent;

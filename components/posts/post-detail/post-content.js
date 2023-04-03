import classes from './post-content.module.css'

import PostHeader from "./post-header";
const DUMMY_POST = {
  title: "Getting Started With NextJS",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs",
  date: "2023-04-01",
  content: "# This is a first posts",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      Content
    </article>
  );
}

export default PostContent;

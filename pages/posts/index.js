import { Fragment } from "react";
import Head from "next/dist/next-server/lib/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="This is where you  can find all posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;

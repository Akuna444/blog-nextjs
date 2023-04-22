import { Fragment } from "react";
import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  console.log(postFileNames);
  const slug = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log(slug);
  return {
    paths: slug.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}
export default PostDetailPage;

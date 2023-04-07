import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
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
  const slug = postFileNames.map((fileNames) => fileNames.replace(/\.md$/, ""));
  return {
    paths: slug.map((slug) => {
      params: {
        slug: slug;
      }
    }),
    fallback: false,
  };
}
export default PostDetailPage;

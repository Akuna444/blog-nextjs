import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_DATA = [
  {
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs",
    date: "2023-04-01",
    excerpt:
      "NextJS is a React frame work that helps to build fullstack react with SSR",
  },
  {
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs2",
    date: "2023-04-01",
    excerpt:
      "NextJS is a React frame work that helps to build fullstack react with SSR",
  },
  {
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs3",
    date: "2023-04-01",
    excerpt:
      "NextJS is a React frame work that helps to build fullstack react with SSR",
  },
  {
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs4",
    date: "2023-04-01",
    excerpt:
      "NextJS is a React frame work that helps to build fullstack react with SSR",
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;

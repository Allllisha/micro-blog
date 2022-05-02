import Link from "next/link";
import { client } from "../libs/client";
import Intro from "../components/intro";
import Menu from "../components/menu";
import Image from "next/image";
import Moment from "react-moment";

export default function Home({ blogs }) {
  return (
    <div>
      <Intro />
      <Menu />
      <div className="container">
        {blogs.map((blog) => (
          <div key={blog.id}>
            {console.log(blog)}
            <div className="card">
              <div className="card-image">
                <Image
                  src={blog.eyecatch.url}
                  alt=""
                  width={305}
                  height={200}
                />
              </div>
              <div className="card-content">
                <span className="tag red">{blog.category.name}</span>
                <p className="desc">
                  <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </p>
              </div>
              <div className="user">
                <Moment format="llll">
                  <h6>{blog.publishedAt}</h6>
                </Moment>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

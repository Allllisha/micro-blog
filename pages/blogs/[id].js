import { client } from "../../libs/client";
import Image from "next/image";
import Moment from "react-moment";

export default function BlogId({ blog }) {
  return (
    <div className="article">
    <main>
     <Moment format="LLL" >
        <p>{blog.publishedAt}</p>
      </Moment>
      <h1>{blog.title}</h1>
      <div className="content">
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
      </div>
    </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

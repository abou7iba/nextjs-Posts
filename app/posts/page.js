import Link from "next/link";

export const metadata = {
  title: "Posts",
};
const Posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next : {
      revalidate :  120 ,
    }
  });
  const posts = await response.json();
  const postsJsx = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} >
      <div className="post" key={post.id}>
        <h2 className="postTitle" >{post.title}</h2>
        <p className="postBody" >{post.body}</p>
      </div>
      </Link>
    );
  })
  return (
    <>
     <h2>{postsJsx}</h2>
    </>
  );
};

export default Posts;

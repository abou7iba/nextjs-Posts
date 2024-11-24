const PostDet = async ({params}) => {
    const postId = params.postId 
    console.log(postId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next : {
          revalidate :  120 ,
        }
      });
      const post = await response.json();
    
    return ( 
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
     );
}
 
export default PostDet;
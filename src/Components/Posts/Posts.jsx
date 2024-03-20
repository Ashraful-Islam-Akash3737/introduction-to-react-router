import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>All Post data:  {posts.length} </h2>
            <p>All posts are here</p>
            <div  className="users-container">
                {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
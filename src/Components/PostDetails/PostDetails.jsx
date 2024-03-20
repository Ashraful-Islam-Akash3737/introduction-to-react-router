import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    console.log("post", post)
    const { title, body, id } = post;
    const {postId} = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
    console.log('post id',postId);
    return (
        <div className="">
            <h3>Post details</h3>
            <div className="user-container">
                <small>{id}</small>
                <h2>Title: {title}</h2>
                <p>Description: {body}</p>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;
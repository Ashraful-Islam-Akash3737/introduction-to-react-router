import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {title, body, userId, id} = post;

    // navigate is for where you want to go to the next 
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="user-container">
            <h5>UserId: {userId}</h5>
            <h2>Title: {title}</h2>
            <p>Description: {body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show More</button></Link>
            <button onClick={handleClick}>More Info</button>
        </div>
    );
};

export default Post;
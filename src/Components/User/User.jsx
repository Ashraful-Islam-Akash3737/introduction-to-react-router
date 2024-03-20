import { Link } from 'react-router-dom';
import UserDetails from '../UserDetails/UserDetails';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className="user-container">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;
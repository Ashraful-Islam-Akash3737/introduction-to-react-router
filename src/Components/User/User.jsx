import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className="user-container">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;
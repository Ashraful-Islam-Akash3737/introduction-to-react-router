import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h3>Total Users: {users.length}</h3>
            <p>All users infos are here.</p>
            <div className="users-container">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;
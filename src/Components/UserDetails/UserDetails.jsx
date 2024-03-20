import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    return (
        <div>
            <h2>User Details</h2>
            <h3>{name}</h3>
        </div>
    );
};

export default UserDetails;
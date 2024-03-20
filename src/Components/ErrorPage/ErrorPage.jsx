import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1><strong>Opps!!!</strong> Page are ont found.</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>page not found</h2>
                    <p>go back to home screen</p>
                    <Link to='/'>Go back</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
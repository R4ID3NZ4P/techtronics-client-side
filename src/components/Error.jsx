import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold my-5">Error 404</h1>
            <p>The page you requested is not found!</p>
            <Link to={"/"} className="btn bg-cyan-500 my-5">Go Back To Home Page</Link>
        </div>
    );
};

export default Error;
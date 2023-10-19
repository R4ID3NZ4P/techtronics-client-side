import { Link } from "react-router-dom";

const BrandCard = ({ brand, logo }) => {
    return (
        <Link to={`/brands/${brand}`}>
            <div className="card card-compact bg-base-100 shadow-xl px-4">
            <figure>
                <img
                    src={logo}
                    alt={`${brand} logo`}
                    className="w-36 h-36 my-6"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{brand}</h2>
            </div>
            </div>
        </Link>
    );
};

export default BrandCard;

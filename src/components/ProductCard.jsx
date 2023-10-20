import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {

    const {
        _id,
        name,
        image,
        brand,
        type,
        price,
        description,
        rating
    } = data;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl w-56 h-56"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <Link to={`/brands/${brand}/${_id}`}><button className="btn bg-cyan-500">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="btn bg-cyan-500">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

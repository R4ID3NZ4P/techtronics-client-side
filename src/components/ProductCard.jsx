import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {

    const {
        _id,
        name,
        image,
        brand,
        type,
        price,
        rating
    } = data;

    const ref = useRef();

    useEffect(() => {
        ref.current.childNodes[rating-1].setAttribute("checked", true);
    }, [])

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
                <h2>Brand: {brand}</h2>
                <h2>Type: {type}</h2>
                <h2>Price: {price}$</h2>
                <h2>Rating:</h2>
                <div className="rating mb-4" ref={ref}>
                    <input type="radio" name={`rating${_id}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`rating${_id}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`rating${_id}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`rating${_id}`} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name={`rating${_id}`} className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions">
                    <Link to={`/brands/${brand}/${_id}`}><button className="btn bg-cyan-500">Details</button></Link>
                    <Link to={`/brands/${brand}/${_id}/update`}><button className="btn bg-cyan-500">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

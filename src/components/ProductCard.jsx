const ProductCard = ({ data }) => {

    const {
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
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

import { useEffect, useState } from "react";

const CartItem = ({id, remove}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://b8a10-brandshop-server-side-olive.vercel.app/cartitem/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])

    if(!data) return (
        <div className="w-full h-[50vh] flex justify-center my-40"><span className="loading loading-infinity w-20"></span></div>
    );

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
        <div className="card glass">
            <figure>
                <img
                    src={image}
                    alt="car!"
                    className="w-56 h-56"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="text-xl font-semibold">Brand: {brand}</h2>
                <p>Price: {price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-error" onClick={() => remove(id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

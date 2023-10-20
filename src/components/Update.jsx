import { useEffect, useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {

    const product = useLoaderData();

    const {
        _id,
        name,
        image,
        brand,
        type,
        price,
        description,
        rating
    } = product;

    const ref = useRef();
    useEffect(() => {
        if(rating) ref.current.childNodes[rating-1].setAttribute("checked", true);
    }, [rating])

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const updatedProduct = {
            name,
            image,
            brand,
            type,
            price,
            description,
            rating
        };

        fetch(`https://b8a10-brandshop-server-side-olive.vercel.app/brands/${brand}/${_id}/update`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(-1);
            })
    };

    return (
        <div className="px-5 lg:px-32 my-14">
            <h1 className="text-3xl font-bold text-center mb-8">Add Product</h1>
            <form
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
            >
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Image</span>
                        <input
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered input-md w-full"
                            name="image"
                            defaultValue={image}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Name</span>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered input-md w-full"
                            name="name"
                            defaultValue={name}
                        />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Brand</span>
                        <input
                            type="text"
                            placeholder="Brand Name"
                            className="input input-bordered input-md w-full"
                            name="brand"
                            defaultValue={brand}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Type</span>
                        <input
                            type="text"
                            placeholder="Category"
                            className="input input-bordered input-md w-full"
                            name="type"
                            defaultValue={type}
                        />
                    </label>
                </div>

                <div className="form-control">
                    <div className="form-control">
                        <label className="input-group">
                            <span>Price</span>
                            <input
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full"
                                name="price"
                                defaultValue={price}
                            />
                            <span>USD</span>
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-md">
                        <span>Description</span>
                        <input
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered input-md w-full"
                            name="description"
                            defaultValue={description}
                        />
                    </label>
                </div>
                <div className="rating lg:col-span-2 mx-auto flex flex-col items-center">
                    <h2>Rating:</h2>
                    <div ref={ref}>
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star"
                            value={1}
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star"
                            value={2}
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star"
                            value={3}
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star"
                            value={4}
                        />
                        <input
                            type="radio"
                            name="rating"
                            className="mask mask-star"
                            value={5}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-neutral lg:col-span-2"
                />
            </form>
        </div>
    );
};

export default Update;

import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import sorryIcon from "/sadicon.png";

const Products = () => {
    const data = useLoaderData();

    if (data.length == 0)
        return (
            <div className="px-5 lg:px-32 my-16 flex flex-col items-center">
                <img src={sorryIcon} alt="" className="w-1/4 mb-8" />
                <h2 className="text-center text-2xl font-semibold">
                    <span className="text-cyan-500">Sorry!</span> No products
                    found in this category...
                </h2>
            </div>
        );

    return (
        <div className="px-5 lg:px-32 my-16 flex flex-col items-center">
            <div className="carousel w-full mb-8">
                {data.map((product, idx) => {
                    if (idx > 2) return;
                    return (
                        <div
                            id={`slide${idx}`}
                            className="carousel-item relative w-full"
                            key={idx}
                        >
                            <img
                                src={product.image}
                                className="w-1/3 mx-auto"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#slide${(idx+2)%3}`} className="btn btn-circle">
                                    ❮
                                </a>
                                <a href={`#slide${(idx+1)%3}`} className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                            <h1 className="absolute bottom-0 right-0 lg:text-xl">{product.name}</h1>
                        </div>
                    );
                })}
            </div>
            <h1 className="text-center text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((product) => (
                    <ProductCard key={product._id} data={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default Products;

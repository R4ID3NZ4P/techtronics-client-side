import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";


const Products = () => {

    const data = useLoaderData();

    return (
        <div className="px-5 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(product => <ProductCard key={product._id} data={product}></ProductCard>)}
        </div>
    );
};

export default Products;
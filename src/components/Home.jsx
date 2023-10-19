import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./BrandCard";

const Home = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <div className="px-5 lg:px-32 my-16 text-center">
                <h1 className="text-3xl font-bold">Brands</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(brand => <BrandCard key={brand.key} brand={brand.brand} logo={brand.logo}></BrandCard>)}
                </div>
            </div>
        </div>
    );
};

export default Home;

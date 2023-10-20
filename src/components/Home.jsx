import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./BrandCard";
import userLogo from "../assets/user.png";

const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="px-5 lg:px-32 my-16 text-center">
                <h1 className="text-3xl font-bold">Brands</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(brand => <BrandCard key={brand.key} brand={brand.brand} logo={brand.logo}></BrandCard>)}
                </div>
                {/* Why Choose Us Section */}
                <div>
                    <h1 className="text-3xl font-bold my-6">Why Choose Us</h1>
                    <div className="rounded-xl p-6 text-white flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-1/2">
                                <h2 className="text-xl font-bold">Quality Tech Products</h2>
                                <p>We offer top-tier tech products from leading brands, ensuring quality and reliability.</p>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-xl font-bold">Expert Guidance</h2>
                                <p>Our tech-savvy team provides expert advice to help you make informed choices.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-1/2">
                                <h2 className="text-xl font-bold">Competitive Prices</h2>
                                <p>Enjoy competitive pricing and special deals, making tech upgrades budget-friendly.</p>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-xl font-bold">Customer-Centric Service</h2>
                                <p>Your satisfaction is our priority, and we&apos;re here to assist you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Section */}
                <div>
                    <h1 className="text-3xl font-bold my-6">Feedbacks From Our Clients</h1>
                    <div className="text-white flex flex-col lg:flex-row items-center justify-evenly gap-6 rounded-xl px-6 py-12  bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div className="flex flex-col items-center w-9/12 lg:w-1/4 space-y-4 glass rounded-xl p-4 lg:h-full">
                            <img src={userLogo} alt="" className="rounded-full w-16" />
                            <h3 className="font-bold">HappyTechShopper22</h3>
                            <p>&quot;I stumbled upon TechTronics and couldn&apos;t believe my luck! They have the latest tech gems and their prices are unbelievable. The customer service is top-notch too. It&apos;s like a tech enthusiast&apos;s dream come true! And of course, five stars!&quot;</p>
                        </div>
                        <div className="flex flex-col items-center w-9/12 lg:w-1/4 space-y-4 glass rounded-xl p-4 lg:h-full">
                            <img src={userLogo} alt="" className="rounded-full w-16" />
                            <h3 className="font-bold">GadgetLover101</h3>
                            <p>&quot;I&apos;ve shopped at TechTronics multiple times, and every experience has been exceptional. Their product selection is impressive, and their staff is incredibly knowledgeable. I always leave with the latest gadgets and a smile on my face!&quot;</p>
                        </div>
                        <div className="flex flex-col items-center w-9/12 lg:w-1/4 space-y-4 glass rounded-xl p-4 lg:h-full">
                            <img src={userLogo} alt="" className="rounded-full w-16" />
                            <h3 className="font-bold"> FutureTechFanatic</h3>
                            <p>&quot;As a tech aficionado, I&apos;ve explored tech shops around the world, but [Your Tech Shop Name] stands out. Their commitment to quality, innovation, and customer satisfaction is commendable. This is where tech dreams come true. Five stars!&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

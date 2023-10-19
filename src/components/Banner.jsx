import background from "/banner.jpg?url"

const Banner = () => {
    return (
        <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        `url(${background})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content px-5 lg:px-32">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to TechTronics</h1>
                        <p className="mb-5">
                        Discover the future of technology at your fingertips. We are your one-stop destination for all things tech, where innovation meets your needs. Whether you&apos;re a tech enthusiast, a gadget guru, or simply looking to upgrade your digital lifestyle, we&apos;ve got you covered.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Banner;
import Cart from "./Cart";  // Assuming Cart is used elsewhere in your app
import NavBar from "./NavBar";

function About() {
    const url = "https://ccreadysites.cyberchimps.com/organic-products-store/wp-content/uploads/sites/155/2021/12/ops-about-hero.png";
    const content = "Welcome to Organic Store, your premier destination for all-natural and organic products that nourish both body and soul. We take pride in offering a wide range of carefully curated items that meet our stringent standards for quality, freshness, and sustainability. At Organic Store, we believe in the power of nature to provide wholesome nutrition without compromise. From farm-fresh produce and artisanal goods to eco-friendly household essentials, each product is selected with your well-being in mind. Our commitment extends beyond offering great products. We are dedicated to fostering a community of health-conscious individuals who value transparency and ethical practices. Thank you for choosing Organic Store. Join us in embracing a lifestyle that celebrates natural goodness and promotes a healthier planet for generations to come.";

    return (
        <>
            <NavBar />

            <div className="text-center p-20">
                <h1 className="md:text-6xl text-xl font-semibold text-[#347758] tracking-widest">
                    About Us
                </h1>
                <img 
                    className="mx-auto p-10" 
                    src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" 
                    alt="Basil Leaf"
                />
            </div>

            <div className="flex flex-wrap md:justify-evenly justify-center h-auto md:h-[80vh] mb-10">
                {/* Left Image Section */}
                <div className="flex md:items-center items-start mb-4 md:mb-0">
                    <img 
                        src={url} 
                        className="rounded-xl md:w-auto md:h-[80vh] w-[40vw] h-[60vh] object-cover"
                        alt="About Us"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full md:w-1/3 px-4">
                    <h2 className="md:text-3xl text-lg font-semibold text-center text-[#347758] mb-4">
                        We are your Favourite Store
                    </h2>
                    <p className="md:text-justify text-gray-600 h-auto md:h-auto md:overflow-auto overflow-scroll font-medium">
                        {content}
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;

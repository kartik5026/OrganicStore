import NavBar from "./NavBar";
import { juiceProducts } from "./Home";
import Product from "./Products";
import "../index.css";

function Juice() {
    const content = "Indulge in our vibrant collection of freshly squeezed juices, crafted to rejuvenate and invigorate your senses. Each bottle embodies the essence of premium fruits and vegetables, carefully selected for their ripeness and nutritional value.";
    
    return (
        <>
            <NavBar />
            <hr />

            <div className="mainDiv px-4 py-8 max-w-7xl mx-auto">
                <div className="text-center">
                    <a href="/" className="text-blue-500 hover:text-green-500">home</a> / <span className="text-gray-500">juice</span>
                    <h1 className="md:text-5xl text-3xl font-semibold my-4 text-[#347758]">Juice:</h1>
                    {/* <div className="text-justify mt-4 text-lg p-4 bg-white shadow-lg rounded-lg text-gray-700">
                        <p>{content}</p>
                    </div> */}
                </div>
                <div className="flex flex-wrap  mt-8">
                    {juiceProducts.map((item) => (
                        <Product key={item.id} val={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Juice;

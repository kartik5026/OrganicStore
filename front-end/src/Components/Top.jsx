import "../index.css"; // Ensure your Tailwind CSS is imported
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Top() {
    const url = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png";
    
    // State to control visibility for fade-in effect
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay to allow the fade-in effect to be noticeable
       
    }, []);

    return (
        <div className="flex flex-col md:flex-row mt-10 bg-[#F9F1E4] py-20">
            <div className={`flex justify-center mb-4 md:mb-0 transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <img 
                    src={url} 
                    alt="Organic Products" 
                    className="md:w-1/2 object-cover  ease-in-out  duration-500 scale-100 hover:scale-125"
                />
            </div>
            <div className={`flex flex-col justify-center md:text-5xl text-sm font-thin text-start md:ml-10 transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <h3 className="mb-2">Best Quality Products</h3>
                <h1 className="mb-4">Join The Organic Movement!</h1>
                <Link to="/groceries">
                    <button className="hover:bg-[#347758] text-white bg-[#F2A310] md:text-xl text-xs rounded-lg px-4 py-2">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Top;

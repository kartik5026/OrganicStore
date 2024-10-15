import NavBar from "./NavBar";
import { products } from "./Home";
import Product from "./Products";
import "../index.css";
function Groceries() {
    const content = "Our grocery display showcases a curated selection of organic and natural products sourced for their quality and freshness. Each item is meticulously chosen to meet our commitment to providing wholesome options for your health and well-being  Explore our range of organic vegetables, grains, nuts, and pantry essentials, all thoughtfully presented to make your shopping experience convenient and rewarding. From nutritious staples like organic brown rice and quinoa to indulgent treats such as organic honey and dried fruits, each product is accompanied by detailed information on its origins and benefits."
    return (
        <>
            <NavBar />
            <hr></hr>
            <div className="mt-20 px-4 py-8 max-w-7xl mx-auto">
                <div className=" text-center">
                    <a href="/" className="text-blue-500 hover:text-green-500">home</a>/<span>grocery</span>
                    <h1 className="md:text-5xl font-semibold text-[#347758]">Groceries:</h1>
                    {/* <div  className="text-justify mt-4 text-lg p-4 bg-white shadow-lg rounded-lg text-gray-700"><p >{content}</p></div> */}
                </div>
                <div className="flex flex-wrap mt-8">
                    {products.map((item,id) => (
                        <Product key ={id} val={item}/>
                    ))}
                </div>

            </div>
        </>
    )
}
export default Groceries;
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
            <div className="mainDiv">
                <a href="/">home</a>/<span>grocery</span>

                <h1>Groceries:</h1>
                <p>{content}</p>
                <div className="productList">
                    {products.map((item) => (
                        <Product val={item} />
                    ))}
                </div>

            </div>
        </>
    )
}
export default Groceries;
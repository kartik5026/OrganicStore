import NavBar from "./NavBar";
import { products } from "./Home";
import Product from "./Products";
import "../index.css";

function Juice() {
    const content = "Indulge in our vibrant collection of freshly squeezed juices, crafted to rejuvenate and invigorate your senses. Each bottle embodies the essence of premium fruits and vegetables, carefully selected for their ripeness and nutritional value."
    return (
        <>
            <NavBar />
            <hr></hr>
            
            <div className="mainDiv">
            <a href="/">home</a>/<span>juices</span>
                <h1>Juices:</h1>
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
export default Juice;
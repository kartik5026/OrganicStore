

import "../index.css"
import { Link } from "react-router-dom";
function Top(){
    const url = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png";
    return(
        <div className="container">
        <div className="item">
            <img src={url}></img>
            
        </div>
        <div className="item">
                <h3>Best Quality Products</h3>
                <h1>Join The Organic Movement!</h1>
                <Link to="/groceries">Shop Now</Link>

            </div>
        </div>
    )
}
export default Top;

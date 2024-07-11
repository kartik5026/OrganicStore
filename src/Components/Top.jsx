

import "../index.css"
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
                <button><a href="/groceries">Shop Now</a></button>

            </div>
        </div>
    )
}
export default Top;
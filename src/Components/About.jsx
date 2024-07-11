import Cart from "./Cart";
import NavBar from "./NavBar";

function About() {
    const url = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg"
    const content = "Welcome to Organic Store, your premier destination for all-natural and organic products that nourish both body and soul. We take pride in offering a wide range of carefully curated items that meet our stringent standards for quality, freshness, and sustainability. At Organic Store, we believe in the power of nature to provide wholesome nutrition without compromise. From farm-fresh produce and artisanal goods to eco-friendly household essentials, each product is selected with your well-being in mind. Our commitment extends beyond offering great products. We are dedicated to fostering a community of health-conscious individuals who value transparency and ethical practices. Whether you're embarking on a wellness journey or simply seeking delicious, guilt-free indulgences, Organic Store is here to support you every step of the way. Thank you for choosing Organic Store. Join us in embracing a lifestyle that celebrates natural goodness and promotes a healthier planet for generations to come."
    return (
        <>
            <NavBar />
            <div className="mainDiv">
                <h1>About Us</h1>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"></img>
            </div>

            <div className="container">
                <div className="item">
                    <h2>We are your Favourite Store</h2>
                    <p>{content}</p>
                </div>
                <div className="item"><img src={url}></img></div>

            </div>

            
        </>
    )
}
export default About;
import NavBar from "./NavBar";
import Product from "./Products";
import Top from "./Top";
import "../index.css";
import Footer from "./Footer";
export const products = [

  {

    name: "Organic Vegetables (mixed bag)",

    price: 250,

    image: "https://www.theorganicplace.com.au/wp-content/uploads/2017/10/Untitled-design-3.png"

  },

  {

    name: "Organic Brown Rice (5kg)",

    price: 800,

    image: "https://m.media-amazon.com/images/I/81IZdvwLt7L._AC_UF1000,1000_QL80_.jpg"

  },

  {

    name: "Organic Apple (1 kg)",

    price: 200,

    image: "https://i0.wp.com/theindianmart.eu/wp-content/uploads/2021/04/Organic-Apple.jpg?fit=400%2C400&ssl=1"

  },

  {

    name: "Organic Honey (500g)",

    price: 350,

    image: "https://m.media-amazon.com/images/I/81Egt5EoC7L.jpg"

  },

  {

    name: "Organic Ghee (1L)",

    price: 1200,

    image: "https://m.media-amazon.com/images/I/715l8HK6OHL.jpg"

  },

  {

    name: "Organic Almonds (200g)",

    price: 400,

    image: "https://m.media-amazon.com/images/I/61-HeXX496L._AC_UF1000,1000_QL80_FMwebp_.jpg"

  },

  {

    name: "Organic Quinoa (1kg)",

    price: 550,

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O-5GKXLe7WoX2rY5OwG35ZLLztlUgzNwOw&s"

  },

  {

    name: "Organic Dried Cranberries (100g)",

    price: 320,

    image: "https://m.media-amazon.com/images/I/91q9lVftbnL.jpg"

  },

  {

    name: "Organic Oats (1kg)",

    price: 280,

    image: "https://m.media-amazon.com/images/I/81N+HMmrmKL.jpg"

  },

  {

    name: "Organic Flax Seeds (250g)",

    price: 190,

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9FHHznYqGwQ5C9uad243z8es-JhpSnXxpQ&s"

  },

  {

    name: "Organic Chia Seeds (400g)",

    price: 450,

    image: "https://m.media-amazon.com/images/I/71Zik65ulFL._AC_UF1000,1000_QL80_.jpg"

  },

  {

    name: "Organic Bananas (12)",

    price: 100,

    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgr_4BqRFjsRxaK2LMd-6K4k-rRcW3MI34zQ&s"

  },

  {

    name: "Organic Applesauce (500g)",

    price: 220,

    image: "https://static.wixstatic.com/media/9477de_41bbbdf4da984e079f651c694938d465~mv2.jpg/v1/fill/w_480,h_805,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9477de_41bbbdf4da984e079f651c694938d465~mv2.jpg"

  },

  {

    name: "Organic Brown Rice Pasta (500g)",

    price: 390,

    image: "https://m.media-amazon.com/images/I/71ehgM9lpDL.jpg"

  },

  {

    name: "Organic Green Tea (100 bags)",

    price: 270,

    image: "https://m.media-amazon.com/images/I/61A6fHPRlQL._AC_UF1000,1000_QL80_.jpg"

  },

];

function Home() {
  return (
    <>
      <NavBar />
      
      <Top />
      

      <div className="productList">
        {products.map((item) => (
          <Product val={item} />

        ))}
        </div>
      <Footer/>
    </>
  )
}
export default Home;
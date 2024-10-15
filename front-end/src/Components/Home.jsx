import NavBar from "./NavBar";
import Product from "./Products";
import Top from "./Top";
import "../index.css";
import Footer from "./Footer";
export const products = [
  {
    id: 1,
    name: "Organic Vegetables (mixed bag)",
    price: 15,
    image: "https://www.theorganicplace.com.au/wp-content/uploads/2017/10/Untitled-design-3.png",
  },
  {
    id: 2,
    name: "Organic Brown Rice (5kg)",
    price: 12,
    image: "https://m.media-amazon.com/images/I/81IZdvwLt7L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Organic Apple (1 kg)",
    price: 4,
    image: "https://i0.wp.com/theindianmart.eu/wp-content/uploads/2021/04/Organic-Apple.jpg?fit=400%2C400&ssl=1",
  },
  {
    id: 4,
    name: "Organic Honey (500g)",
    price: 10,
    image: "https://m.media-amazon.com/images/I/81Egt5EoC7L.jpg",
  },
  {
    id: 5,
    name: "Organic Ghee (1L)",
    price: 25,
    image: "https://m.media-amazon.com/images/I/715l8HK6OHL.jpg",
  },
  {
    id: 6,
    name: "Organic Almonds (200g)",
    price: 8,
    image: "https://m.media-amazon.com/images/I/61-HeXX496L._AC_UF1000,1000_QL80_FMwebp_.jpg",
  },
  {
    id: 7,
    name: "Organic Quinoa (1kg)",
    price: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O-5GKXLe7WoX2rY5OwG35ZLLztlUgzNwOw&s",
  },
  {
    id: 8,
    name: "Organic Dried Cranberries (100g)",
    price: 6,
    image: "https://m.media-amazon.com/images/I/91q9lVftbnL.jpg",
  },
  {
    id: 9,
    name: "Organic Oats (1kg)",
    price: 5,
    image: "https://m.media-amazon.com/images/I/81N+HMmrmKL.jpg",
  },
  {
    id: 10,
    name: "Organic Flax Seeds (250g)",
    price: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9FHHznYqGwQ5C9uad243z8es-JhpSnXxpQ&s",
  },
  {
    id: 11,
    name: "Organic Chia Seeds (400g)",
    price: 9,
    image: "https://m.media-amazon.com/images/I/71Zik65ulFL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 12,
    name: "Organic Bananas (12)",
    price: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgr_4BqRFjsRxaK2LMd-6K4k-rRcW3MI34zQ&s",
  },
  {
    id: 13,
    name: "Organic Applesauce (500g)",
    price: 5,
    image: "https://static.wixstatic.com/media/9477de_41bbbdf4da984e079f651c694938d465~mv2.jpg/v1/fill/w_480,h_805,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9477de_41bbbdf4da984e079f651c694938d465~mv2.jpg",
  },
  {
    id: 14,
    name: "Organic Brown Rice Pasta (500g)",
    price: 7,
    image: "https://m.media-amazon.com/images/I/71ehgM9lpDL.jpg",
  },
  {
    id: 15,
    name: "Organic Green Tea (100 bags)",
    price: 10,
    image: "https://m.media-amazon.com/images/I/61A6fHPRlQL._AC_UF1000,1000_QL80_.jpg",
  },
];
export const juiceProducts = [
  {
    id: 1,
    name: "Organic Orange Juice (1L)",
    price: 5,
    image: "https://www.rusorganic.in/cdn/shop/files/Fresh-orange-juice-cold-pressed-rus-organic-daily-delivery-juice-1litre-juice.jpg?v=1722340666&width=600",
  },
  {
    id: 2,
    name: "Organic Apple Juice (1L)",
    price: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Cb4Q4wSJFGWNV-GPztgfkjDA5KlASyioTQ&s",
  },
  {
    id: 3,
    name: "Organic Cranberry Juice (500ml)",
    price: 8,
    image: "https://naturessoulshop.com/wp-content/uploads/2022/07/Nutty-Pasta-Sauce.jpeg",
  },
  {
    id: 4,
    name: "Organic Carrot Juice (1L)",
    price: 7,
    image: "https://www.rusorganic.in/cdn/shop/files/Fresh-carrot-juices-cold-pressed-online-rus-organic.jpg?v=1722340627&width=600",
  },
  {
    id: 5,
    name: "Organic Pomegranate Juice (500ml)",
    price: 9,
    image: "https://4.imimg.com/data4/MU/KQ/MY-85258/pomagranate-juice-500x500.jpg",
  },
  {
    id: 6,
    name: "Organic Grape Juice (1L)",
    price: 6,
    image: "https://www.juthour.com/cdn/shop/products/9120008990118_grande.jpg?v=1588161029",
  },
  {
    id: 7,
    name: "Organic Beetroot Juice (500ml)",
    price: 7,
    image: "https://naturessoulshop.com/wp-content/uploads/2024/06/Super-Beet-400-Nitrate.webp",
  },
  {
    id: 8,
    name: "Organic Pineapple Juice (1L)",
    price: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe80NXadUcaWPC5VECeni7d8bpLu_CvNXvw&s",
  },
  {
    id: 9,
    name: "Organic Mango Juice (1L)",
    price: 9,
    image: "https://assets.wakefern.com/is/image/wakefern/2500004080-001?$Mi9Product_detail$",
  },
  {
    id: 10,
    name: "Organic Tomato Juice (500ml)",
    price: 6,
    image: "https://ariso.blob.core.windows.net/ariso/ruploads/31052022-fresh-tomato-juice-recipe.jpg",
  },
];


function Home() {
  return (
    <>
      <NavBar />
      
      <Top />
      
      <div className="md:text-4xl mt-20 font-thin ">Here are some Products!</div>
      <div className="flex flex-wrap mx-4 ">
        {products.map((item,id) => (
          <Product key={id} val={item} />

        ))}
        </div>
        <hr/>
      <Footer/>
    </>
  )
}
export default Home;
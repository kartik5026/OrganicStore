import { useDispatch } from "react-redux";
import "../index.css";
import { addToCart } from "../Slice/CartSlice";

function Product(props) {
    const { name, price, image: url } = props.val;  // Destructuring props for cleaner code

    const dispatch = useDispatch();
    
    const addItem = () => {
        alert('Check the cart for CheckOut !')
        const cartItemObj = {
            name,
            price,
            url,
        };
        dispatch(addToCart(cartItemObj));
    };

    return (
        <div className="md:w-1/5 w-1/2 my-4 text-center border rounded-lg shadow-xl scale-95 hover:scale-100 duration-300 ease-in-out">
            <img src={url} alt={name} className="md:w-60 md:h-60 h-32 w-32 object-cover rounded-t-lg" />
            <p className="md:block hidden mt-2">{name}</p>
            <p className="mt-2">Price: ${price}</p>
            <button 
                onClick={addItem} 
                className="bg-[#F2A310] hover:bg-green-500 text-white rounded-md px-6 py-1 mt-4 transition-colors duration-200 ease-in-out"
            >
                Add
            </button>
        </div>
    );
}

export default Product;

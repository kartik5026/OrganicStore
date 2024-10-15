import { useDispatch, useSelector } from "react-redux";
import { decQty, emptyCart, incQty, removeFromCart, updateCartCount, updateTotalPrice } from "../Slice/CartSlice";
import axios from "axios";

function Cart() {
    const { productName, price, imageUrl, count, totalPrice, qty } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeItem(index) {
        dispatch(removeFromCart(index));
    }

    function counter() {
        dispatch(updateCartCount());
    }

    function increase(index){
        dispatch(incQty(index));
    }

    function decrease(index){
        dispatch(decQty(index));
    }

    async function checkOut(){

        const res = await axios.post("http://localhost:3000/checkout",{qty,productName,price});
        window.location = res.data.url;
      
    }

    counter();

    if (productName.length === 0) {
        return (
            <div className="text-center p-10">
                <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
                <p className="mt-4">Go back home and add some items!</p>
                <a href="/" className="text-blue-500 hover:underline">Go Back Home</a>
            </div>
        );
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-semibold">Your Orders:</h1>
            <h3 className="mt-4 text-lg">Total Items: {count}</h3>

            {productName.map((name, index) => (
                <div key={index} className="flex items-center justify-between my-4 p-4 border-b border-gray-300">
                    <img src={imageUrl[index]} height={100} width={100} alt={name} />
                    <div className="flex-1 mx-4">
                        <p className="font-medium">{name}</p>
                        <div>
                            Qty:{qty[index]}
                            <button className="px-4 bg-gray-200 rounded-md mx-2 text-center my-4 md:my-0" onClick={()=>increase(index)}>+</button>
                            <button className="px-4 bg-gray-200 rounded-md mx-2 text-center my-4 md:my-0" onClick={()=>decrease(index)}>-</button>
                        </div>
                        <p className="text-gray-700">Price: ${price[index].toFixed(2)}</p>
                    </div>
                    <button
                        onClick={() => { removeItem(index) }}
                        className="bg-red-500 hover:bg-red-700 text-white rounded-md px-2 py-1"
                    >
                        Remove
                    </button>
                </div>
            ))}

            <div className="mt-4">
                <button
                    onClick={() => dispatch(updateTotalPrice())}
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2"
                >
                    Get Total
                </button>
                {totalPrice > 0 && <p className="mt-2">Total Price: ${totalPrice.toFixed(2)}</p>}
                <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-gray-500 hover:bg-gray-700 text-white rounded-md px-4 py-2 mt-2 "
                >
                    Clear Cart
                </button>

                <button className="bg-green-700 rounded-md px-4 py-2 text-white mx-4" onClick={checkOut}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;

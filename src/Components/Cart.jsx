import { useDispatch, useSelector } from "react-redux";

import { emptyCart, removeFromCart, updateCartCount, updateTotalPrice } from "../Slice/CartSlice";

function Cart() {


    const { productName, price, imageUrl, count, totalPrice } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    function removeItem(index) {
        dispatch(removeFromCart(index))
    }
    function counter() {
        dispatch(updateCartCount());
    }
    counter();
    if (productName.length == 0) {
        return (
            <>
                <h1>Your Cart is Empty</h1>
                <a href="/">Go Back Home And Add Items</a>
            </>
        );
    }
    return (
        <>

            <h1>Your Orders:</h1>
            <h3>Total Items:{count}</h3>

            {
                productName.map((name, index) => (
                    <div>
                        <img src={imageUrl[index]} height={100} width={100}></img>
                        <p>{name}</p>
                        <p>{price[index]}</p>
                        <button onClick={() => { removeItem(index) }}>Remove</button>
                        <hr />
                    </div>

                ))
            }
            <button onClick={()=> dispatch(updateTotalPrice())}>Get Total</button><p>Total price:{totalPrice}</p>
            <button onClick={() => dispatch(emptyCart())}>Clear Cart</button>

        </>
    )
}
export default Cart;
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { addToCart } from "../Slice/CartSlice";

function Product(props) {
    const name = props.val.name;
    const price = props.val.price;
    const url = props.val.image;
    
    const cartItemObj = {
        name,
        price,
        url
    }
    
    
    const dispatch = useDispatch();
    function addItem(itemsObj){
        
        dispatch(addToCart(itemsObj));
    }
    return (
        <div>

            <img width={300} height={300} src={url}></img>
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <button onClick={()=>{addItem(cartItemObj)}}>Add</button>

        </div>
    )
}

export default Product;
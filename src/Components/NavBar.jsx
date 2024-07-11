import { Link } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../Slice/CartSlice";
import UserAuth from "../Auth/UserAuth";
function NavBar() {
    const url = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg";
    const {count} = useSelector((state)=> state.cart)

    const dispatch = useDispatch();
    function Count(){
        dispatch(updateCartCount());
    }
    Count();
    return (
        <div className="nav backGround">
            
                <a href="/"><img src={url} id="logo"></img></a>

                <Link to="/">Everything</Link>
                <Link to="/groceries">Groceries</Link>
                <Link to="/juice">Juice</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart"><img src="https://static-00.iconduck.com/assets.00/cart-icon-250x256-xgkwtkpu.png" width={20} height={20}></img> <span>{count}</span></Link>
                
                <UserAuth/>
                

            
        </div>
    )
}
export default NavBar;
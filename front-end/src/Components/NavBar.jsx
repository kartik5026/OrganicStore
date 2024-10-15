import { Link } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../Slice/CartSlice";
import UserAuth from "../Auth/UserAuth";
function NavBar() {
    const url = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg";
    const { count } = useSelector((state) => state.cart)

    const dispatch = useDispatch();
    function Count() {
        dispatch(updateCartCount());
    }
    Count();
    return (
        <>


            <div className="justify-evenly md:flex hidden text-xl font-semibold">

                <a href="/"><img src={url} id="logo"></img></a>
                <Link to="/" className="hover:text-[#347758] hover:underline">Everything</Link>
                <Link to="/groceries" className="hover:text-[#347758] hover:underline">Groceries</Link>
                <Link to="/juice" className="hover:text-[#347758] hover:underline">Juice</Link>
                <Link to="/about" className="hover:text-[#347758] hover:underline">About</Link>
                <Link to="/contact" className="hover:text-[#347758] hover:underline">Contact</Link>
                <Link to="/cart" className="flex items-start py-1"><img src="https://static-00.iconduck.com/assets.00/cart-icon-250x256-xgkwtkpu.png" width={20} height={20}></img> <span>{count}</span></Link>
               <UserAuth />
            </div>
            <div className="md:hidden flex justify-center flex-wrap text-sm text-center items-center ">
                <div><a href="/"><img src={url} id="logo"></img></a></div>

                <div className="flex justify-center flex-wrap w-full p-4">
                    <Link to="/groceries" className="w-1/2  py-4 hover:text-[#347758] ">Groceries</Link>
                    <Link to="/juice" className="w-1/2 py-4 hover:text-[#347758] ">Juice</Link>
                    <div className="w-1/2 flex py-4 justify-center"><Link to="/cart"> <img src="https://static-00.iconduck.com/assets.00/cart-icon-250x256-xgkwtkpu.png" width={20} height={20} ></img> <span >{count}</span></Link></div>
                    <div className="w-1/2 py-4"><UserAuth /></div>
                </div>

            </div>



        </>
    )
}
export default NavBar; 
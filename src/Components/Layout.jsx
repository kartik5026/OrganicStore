import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from "./Home";

import Groceries from "./Groceries";
import Juice from "./Juice";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";


function Layout() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element=<Home />></Route>
                    
                    <Route path="/groceries" element=<Groceries />></Route>
                    <Route path="/juice" element=<Juice />></Route>
                    <Route path="/about" element=<About />></Route>
                    <Route path="/contact" element=<Contact />></Route>
                    <Route path="/cart" element=<Cart/>></Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Layout;
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function UserAuth() {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated ? <Logout /> : <Login />}
            
            <Profile />
        </>
    )
}
export default UserAuth;    
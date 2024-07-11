
import { useAuth0 } from "@auth0/auth0-react";
import "../index.css";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <a onClick={() => loginWithRedirect()} >Log In</a>;
};

export default Login;
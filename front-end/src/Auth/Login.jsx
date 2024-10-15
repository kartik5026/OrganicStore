
import { useAuth0 } from "@auth0/auth0-react";
import "../index.css";
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}  className="bg-[#F2A310] font-semibold hover:bg-[#347758] text-white h-8 px-4 mt-1 text-center rounded-lg" >Log In</button>;
};

export default Login;

import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}  className="bg-[#F2A310] hover:bg-[#347758] text-white h-8 px-4 mt-1 text-center rounded-lg" >
      Log Out
    </button>
  );
};

export default Logout;
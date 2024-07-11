
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </a>
  );
};

export default Logout;
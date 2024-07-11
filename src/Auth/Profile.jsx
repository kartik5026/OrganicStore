
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
      <p>Name And Email</p>
      <marquee>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        </marquee>  
      </div>
    )
  );
};

export default Profile;
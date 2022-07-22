import "../CSS/UserPage.css";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(user);

  return (
    !user.email ? navigate("/") :
    <div className="UserPage">
      <div>
        <img src={user.reloadUserInfo.photoUrl ? user.reloadUserInfo.photoUrl : "https://freesvg.org/img/abstract-user-flat-3.png"} />
        <div>Hello {user.displayName ? user.displayName : user.email} ! </div>
        <div>Account created since: {user.metadata.creationTime} </div>
        <div>Last login: {user.metadata.lastSignInTime} </div>
        <Button className="userpage-button" onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}

export default UserPage;

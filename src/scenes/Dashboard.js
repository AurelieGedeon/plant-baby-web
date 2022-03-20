import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Button } from "@mui/material";

export default function Dashboard({ user }) {
  console.log(user); //email, displayName, photoURL

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <h1>Welcome</h1>
      <h2>Welcome, {user.firstName || user.email || user.displayName}!</h2>
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile of logged-in user" />
      )}
      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
}

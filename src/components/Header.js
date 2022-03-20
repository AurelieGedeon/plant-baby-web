import "../App.css";
import MenuDrawer from "./MenuDrawer";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/PlantBabyLogoW.png";
import { getAuth, signOut } from "firebase/auth";
import { AppBar, Box, Toolbar, Button } from "@mui/material";

export default function Header({ user }) {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };

  const handleLoginPage = () => {
    navigate("/login");
  };
  const auth = getAuth();

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#224907" }}>
          <MenuDrawer />
          <Button onClick={handleHomePage}>
            <img
              src={Logo}
              alt="Plant Baby logo that leads to the home page"
              height={"65px"}
            />
          </Button>
          {!user ? (
            <Button
              color="inherit"
              className="login-button"
              style={{
                position: "absolute",
                right: "15px",
                border: "10px",
                borderColor: "white",
              }}
              onClick={handleLoginPage}
            >
              Login
            </Button>
          ) : (
            <Button
              color="inherit"
              className="login-button"
              style={{
                position: "absolute",
                right: "15px",
                border: "10px",
                borderColor: "white",
              }}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

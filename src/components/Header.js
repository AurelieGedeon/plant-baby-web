import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/PlantBabyLogoS.png";

export default function Header() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
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

          <Button
            color="inherit"
            className="login-button"
            style={{ position: "absolute", right: "15px" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import "../App.css";
import { useNavigate } from "react-router-dom";

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
          <Button
            color="inherit"
            style={{ fontFamily: "Bukhari Script, sans-serif" }}
            onClick={handleHomePage}
          >
            Plant Baby
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

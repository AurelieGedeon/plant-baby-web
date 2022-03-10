import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import "../App.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#224907" }}>
          <MenuDrawer />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="web-name"
          >
            Plant Baby
          </Typography>
          <Button color="inherit" className="login-button">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

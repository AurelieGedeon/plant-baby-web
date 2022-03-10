import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./MenuDrawer";
import { color } from "@mui/system";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={MenuDrawer}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plant Baby
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

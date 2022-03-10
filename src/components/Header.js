import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plant Baby
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

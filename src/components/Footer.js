import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          style={{ backgroundColor: "#224907", justifyContent: "center" }}
        >
          <Typography style={{ textAlign: "center" }}>
            2022 © Aurelie Gedeon
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

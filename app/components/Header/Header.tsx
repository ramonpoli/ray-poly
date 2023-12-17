import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar sx={{ zIndex: 2000, backgroundColor: "none" }}>
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <Typography variant="h6" color="text.primary">
          Ray Poly Web developer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

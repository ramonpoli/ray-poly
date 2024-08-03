"use client";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

const MenuItems: { link: string; text: string }[] = [
  { link: "/about", text: "About me" },
];

const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      component="nav"
      sx={{ zIndex: 2000, backgroundColor: "none" }}
    >
      <Toolbar sx={{ backgroundColor: "background.paper" }}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="menu"
          className={"hide-desktop"}
          sx={{ mr: 2 }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          className={styles.Nav}
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handleCloseNavMenu}
        >
          {MenuItems.map((item) => (
            <MenuItem className={styles.NavItem} key={item.text}>
              <Link href={item.link}>
                <Typography color={"text.primary"}>{item.text}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <Link href={"/"}>
          <Typography variant="h6" color="text.primary">
            Ray Poly Web developer
          </Typography>
        </Link>
        <nav className={`display-desktop ${styles.Nav}`}>
          {MenuItems.map((item) => (
            <Link href={item.link} key={item.text} className={styles.NavItem}>
              <Typography color={"text.primary"}>{item.text}</Typography>
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

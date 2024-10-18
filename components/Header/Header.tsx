"use client";
import {
  AppBar,
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
import { sendGoogleEvent } from "@/utils/googleAnalytics";
import Image from "next/image";

const MenuItems: { link: string; text: string }[] = [
  { link: "/about", text: "About me" },
  { link: "/blog", text: "Blog" },
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
              <Link href={item.link} onClick={() => { sendGoogleEvent(`navbar_${item.text}Clicked`) }}>
                <Typography color={"text.primary"}>{item.text}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <Link href={"/"} onClick={() => { sendGoogleEvent('navbar_logoClicked') }}>
          <Image src={'/logos/logo-landscape.png'} alt={'Ray Poly\'s logo'} width={150} height={50} />
        </Link>
        <nav className={`${styles.Nav} ${styles.NavDesktop}`}>
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

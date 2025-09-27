import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuoptions = [
        {
            Text: "Home",
            icon: <HomeIcon/>,
        },

        {
            Text: "Sobre Nós",
            icon: <InfoIcon/>,
        },

        {
            Text: "Nosso Trabalho",
            icon: <HomeWorkIcon/>,
        },

        {
            Text: "Avaliação",
            icon: <CommentRoundedIcon/>,
        },

        {
            Text: "Contato",
            icon: <PhoneRoundedIcon/>,
        },

        {
            Text: "Carrinho",
            icon: <ShoppingCartRoundedIcon/>,
        },
    ]
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo donuts" />
      </div>

      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#products">Sobre Nós</a>
        <a href="#about">Nosso Trabalho</a>
        <a href="#about">Avaliação</a>
        <a href="#contact">Contato</a>
        <a href="#contact"><BsCart2 className="navbar-cart-icon"/></a>
        <button className="primary-button">Reservas agora</button>
      </div>

      <div className="nav-bar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>

    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box sx={{width: 250}} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>

        <List>
            {menuoptions.map((item) => (
                <ListItem Key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.Text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

        </Box>

    </Drawer>

    </nav>
  );
};

export default Navbar;

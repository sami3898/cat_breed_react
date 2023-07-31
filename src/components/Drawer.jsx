import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 Typography,
 makeStyles,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
       fontFamily: "Poppins",
       textDecoration: "none",
       color: "black"
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        // style={{ width: "240px", backgroundColor: "green"}}
      >
        <List style={{ width: "200px"}}>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={"/"} className={classes.link}>
                <Typography variant="body1" className={classes.link}>Home</Typography>
              </NavLink>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={"/"} className={classes.link}>
                <Typography variant="body1" className={classes.link}>How it's work?</Typography>
              </NavLink>
            </ListItemText>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <NavLink to={"/"} className={classes.link}>
                <Typography variant="body1" className={classes.link}>About</Typography>
              </NavLink>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
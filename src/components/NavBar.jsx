import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        fontFamily: "Poppins",
        fontWeight: "600",
        color: "red",
        cursor: "pointer",
        fontSize: theme.typography.h4,
        "@media (max-width: 500px)": {
            fontSize: "24px",
        },
        "@media (max-width: 300px)": {
            fontSize: "14px",
        },
    },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        "@media (max-width: 1094px)": {
            fontSize: "16px",
        },
        "@media (max-width: 1040px)": {
            fontSize: "14px",
        },
        fontFamily: "Poppins",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "red",
            borderBottom: "1px solid red",
        },
    },
    logoLink: {
      textDecoration: "none"
    }
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar
            elevation={0}
            position="static"
            style={{ backgroundColor: "white" }}
        >
            <Toolbar
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <NavLink to={"/"} className={classes.logoLink}>
                    <Typography variant="h4" className={classes.logo}>
                        🐱 Cat Breed
                    </Typography>
                </NavLink>

                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <NavLink to={"/"} className={classes.link}>
                            Home
                        </NavLink>

                        <Link to="HowItsWork" smooth={true} duration={500}>
                            <NavLink to={"/"} className={classes.link}>
                                How it's works?
                            </NavLink>
                        </Link>

                        <Link to="AboutSection" smooth={true} duration={500}>
                            <NavLink to={"/"} className={classes.link}>
                                About
                            </NavLink>
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;

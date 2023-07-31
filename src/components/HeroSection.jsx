import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // height: "50vh",
        marginTop: theme.spacing(20),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundColor: "#fff",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    heroContent: {
        textAlign: "center",
        padding: theme.spacing(4),
    },
    heroTitle: {
        fontSize: "4rem",
        fontFamily: "Poppins",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2rem",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.7rem",
        },
    },
    heroSubtitle: {
        fontSize: "1.5rem",
        fontFamily: "Poppins",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
    },
    heroButton: {
        marginTop: theme.spacing(6),
        borderColor: "red",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1.2rem",
        color: "red",
        '&:hover': {
            backgroundColor: 'red',
            borderColor: "red",
            color: 'white',
        },

        // marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
    },
}));

const HeroSection = () => {
    const classes = useStyles();
    const navigation = useNavigate();

    return (
        <Container className={classes.heroContainer}>
            <div className={classes.heroContent}>
                <Typography variant="h1" className={classes.heroTitle}>
                    "Discover Your Cat's True Breed: Unleash the Power of{" "}
                    <span style={{ color: "red" }}>Machine Learning!</span> 🐱
                    Upload a Picture of Your Feline Friend and Unravel Their
                    Unique Cat Breed in Seconds"
                </Typography>
                {/* <Typography variant="body2" className={classes.heroSubtitle}>
            Currently the model has been trained upon 7 cat breeds:<br/> Russian Blue, Persian, 
        </Typography> */}
                {/* <a href="/PredictPage" smooth={true} duration={500}> */}
                    <Button
                        onClick={() => navigation("/PredictPage")}
                        variant="outlined"
                        color="primary"
                        className={classes.heroButton}
                    >
                        Let's Predict
                    </Button>
                {/* </a> */}
            </div>
        </Container>
    );
};

export default HeroSection;

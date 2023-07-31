import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    // height: "30%",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // [theme.breakpoints.down('sm')]: {
    //     flexDirection: 'column',
    //     height: "130vh"
    // },
    // [theme.breakpoints.down('md')]: {
    //     flexDirection: 'column',
    //     height: "130vh"
    // },
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: theme.spacing(6),
  },
  aboutDetails: {
    fontFamily: "Poppins",
    lineHeight: '1.6',
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
        textAlign: "center",
    },
    [theme.breakpoints.down('md')]: {
        textAlign: "center"
    },
  },
}));

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Container id="AboutSection" className={classes.section}>
      <Typography variant="h4" className={classes.title}>
        About Project
      </Typography>
      <Typography variant="h6" className={classes.aboutDetails}>
      As a passionate cat lover and a dedicated software engineer, I embarked on an exciting journey to combine my two great passions. Using the powerful Teachable Machine from Google, I meticulously trained a cutting-edge machine learning model to uncover the diverse world of cat breeds.
      <br/><br/>Driven by my unwavering love for cats and armed with programming prowess, I carefully curated a training dataset comprising 7 distinct cat breeds. It was a labor of love as the model's training demanded considerable time and dedication.
      <br/><br/>In the coming days, I envision expanding the model's knowledge with even more cat breeds, making it an extensive and comprehensive cat breed identifier.


      </Typography>
    </Container>
  );
};

export default AboutSection;

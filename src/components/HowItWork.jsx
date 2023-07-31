import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    // height: "30%",
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    justifyContent: 'center',
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  image: {
    width: '80%',
    height: 'auto',
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        // flexDirection: 'column',
        // height: "130vh"
        width: '50%',
      },
      [theme.breakpoints.down('md')]: {
        // flexDirection: 'column',
        // height: "130vh"
        width: '50%',
      },
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: "600"
  },
  subTitle: {
    fontFamily: "Poppins",
    width: "80%",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "600",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        // flexDirection: 'column',
        // height: "130vh"
        fontSize: theme.typography.body1
      },
  }
}));

const HowItWorksSection = () => {
  const classes = useStyles();

  return (
    <div id="HowItsWork" className={classes.section}>
        <Typography variant='h4' className={classes.heading}>How it's works?</Typography>
    <Grid container spacing={4} >
        
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <img
          src={require('../assets/cat.png')}
          alt="Step 1"
          className={classes.image}
        />
        <Typography variant="h6" className={classes.title}>Upload Your Cat's Image</Typography>
        <Typography variant="body1" className={classes.subTitle}>
        Begin the exciting journey by simply uploading a clear image of your adorable cat to our intuitive platform
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <img
           src={require('../assets/ai.png')}
          alt="Step 2"
          className={classes.image}
        />
        <Typography variant="h6" className={classes.title}>Machine Learning Magic</Typography>
        <Typography variant="body1" className={classes.subTitle}>
            Our machine learning algorithms will analyze the image and identify distinct features that define your cat's breed
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <img
           src={require('../assets/find.png')}
          alt="Step 3"
          className={classes.image}
        />
        <Typography variant="h6" className={classes.title}>Reveal Your Cat's Breed</Typography>
        <Typography variant="body1" className={classes.subTitle}>
        Within seconds, you'll receive a fascinating result, unveiling the true breed of your beloved feline companion
        </Typography>
      </Grid>
    </Grid>
    </div>
  );
};

export default HowItWorksSection;

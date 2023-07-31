import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, IconButton } from '@material-ui/core';
import { GitHub, Twitter, LinkedIn, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    left: 0,
    bottom: 0,

  },
  socialMediaIcons: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
  devName: {
    fontFamily: "Poppins",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: "10px"
    },
}
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
    <Typography variant="body1" className={classes.devName}>Developed by<br/>Abdulsami</Typography>
      <div className={classes.socialMediaIcons}>
        <Link href="https://github.com/sami3898" target="_blank" rel="noopener noreferrer">
          <IconButton size='small'>
            <GitHub />
          </IconButton>
        </Link>
        <Link href="https://twitter.com/sami3898" target="_blank" rel="noopener noreferrer">
        <IconButton size='small'>
            <Twitter />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/abdulsami-behrinwala-386b79154/" target="_blank" rel="noopener noreferrer">
        <IconButton size='small'>
            <LinkedIn />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/sami_3898/" target="_blank" rel="noopener noreferrer">
        <IconButton size='small'>
            <Instagram />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px', // Customize the height of the loader container
  },
}));

const HorizontalLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <CircularProgress variant="indeterminate" style={{ color: "red"}} />
    </div>
  );
};

export default HorizontalLoader;
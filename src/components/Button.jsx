import { IconButton, makeStyles } from '@material-ui/core'
import React from 'react'

const Button = () => {

    const classes = useClasses()
    return (
        <IconButton class={classes.button}>
            Hover me
        </IconButton>
    )
}

export default Button;

const useClasses = makeStyles((theme) => ({
    button: {
        paddingVertical: "10px",
        paddingHorizontal: "12px",
        // border: none,
        borderRadius: 5,
        // font-weight: bold;
        // letter-spacing: 5px;
        // text-transform: uppercase;
        // color: #2c9caf;
        // transition: all 1000ms;
        // font-size: 15px;
        // position: relative;
        // overflow: hidden;
        borderWidth: 2,
        borderColor: "#2c9caf"
    }
}))
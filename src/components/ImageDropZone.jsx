import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Paper, Grid, Button } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import * as mobilenet from "@tensorflow-models/mobilenet";
import HorizontalLoader from "./Loader";

const useStyles = makeStyles((theme) => ({
    section: {
        flex: 1,
        display: "flex",
        flexDirection: "column",

        padding: theme.spacing(4),
    },
    dropzone: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
        border: `2px dashed red`,
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            minHeight: "200px",
        },
        marginTop: "20px",
    },
    uploadedImage: {
        width: "100%",
        height: "auto",
    },
    title: {
        fontFamily: "Poppins",
        fontWeight: "600",
        marginBottom: "20px",
    },
    subText: {
        fontFamily: "Poppins",
    },
    predictButton: {
        // marginTop: theme.spacing(6),
        borderColor: "red",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1.2rem",
        color: "white",
        backgroundColor: "red",
        margin: theme.spacing(1),
        '&:hover': {
            backgroundColor: 'red',
            borderColor: "red",
            color: 'white',
        },
    },
    removeButton: {
        // marginTop: theme.spacing(6),
        borderColor: "red",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1.2rem",
        color: "red",
        margin: theme.spacing(1),
    },
    gridContainer: {
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse",
        },
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    catText: {
        fontFamily: "Poppins",
        margin: theme.spacing(1),
    },
    catResult: {
        fontFamily: "Poppins",
        fontWeight: "600",
    },
    imageList: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(2),
        overflowX: 'auto',
        whiteSpace: 'nowrap',
    },
    imageListItem: {
        width: '100%',
        height: 'auto',
        maxWidth: '200px', // Customize the width of each image
        marginRight: theme.spacing(2), // Customize the spacing between images
    },
    recentTitle: {
        fontFamily: "Poppins",
        fontWeight: "600",
        textAlign: "left",
        margin: theme.spacing(2)
    },
}));

const ImageDropzone = () => {
    const classes = useStyles();

    const [image, setImage] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [recentImages, setRecentImages] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Handle dropped files here, e.g., upload to a server or show the image
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // Do something with the uploaded image, e.g., display it on the page
            const uploadedImageSrc = reader.result;
            setImage(uploadedImageSrc);
            console.log("Uploaded image source:", uploadedImageSrc);
        };

        if (file) {
            setImage(file);
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*", // Accept only image files
        multiple: false, // Allow only one file to be dropped
    });

    const removeImage = () => {
        setImage("");
        setBreed("")
        setError("")
    };

    const predictImage = async () => {
        try {
            setIsLoading(true)
            const model = await mobilenet.load();
            const url =
                "https://teachablemachine.withgoogle.com/models/KNWFEAvhp/" +
                "model.json";
            const metaUrl =
                "https://teachablemachine.withgoogle.com/models/KNWFEAvhp/" +
                "metadata.json";
            const tmModel = await tmImage.load(url, metaUrl);
            const predictions = await model.classify(
                document.getElementById("img")
            );
            let isCat = 0
            predictions.map((item) => {
                if(item.className.includes("cat")) {
                    isCat++
                }
            })
            if (isCat > 0) {
                const pre = (await tmModel).predict(document.getElementById("img"));
                console.log(pre)
                const className = await pre.then((value) => {
                        return value.reduce((prev, current) =>{
                            return prev.probability > current.probability ? prev : current
                        })
                });
                setBreed(className)
                setRecentImages([...recentImages, {image: image, class: className}])
            } else {
                console.log("There is no cat")
                setError("There is no cat!!")
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className={classes.section}>
            {isLoading && <HorizontalLoader />}
            <Typography variant="h4" className={classes.title}>
                Drop your cat image here
            </Typography>
            <Typography variant="caption" className={classes.subText}>
                Currently model support 8 breeds:{" "}
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    Russian Blue, Manie coon, Persian, Bengal, Ragdoll, Sphynx,
                    Scottish Fold, British Shorthair
                </span>
            </Typography>
            {!image ? (
                <Paper
                    {...getRootProps()}
                    className={classes.dropzone}
                    elevation={3}
                >
                    <input {...getInputProps()} />
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className={classes.subText}
                    >
                        Drag and drop an image here, or click to select an
                        image.
                    </Typography>
                </Paper>
            ) : (
                <Grid container spacing={2} className={classes.gridContainer}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classes.imageContainer}
                    >
                        <img
                            id="img"
                            src={image}
                            alt="Image"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classes.buttonContainer}
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.predictButton}
                            onClick={() => predictImage()}
                        >
                            Predict
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.removeButton}
                            onClick={() => removeImage()}
                        >
                            Remove
                        </Button>
                        {breed && <Typography variant="body1" className={classes.catText}>
                            Your cat is Identify as:<span style={{ fontWeight: "bold"}}>{` ${breed.className}`}</span>
                        </Typography>}
                        {error && <Typography color="error" variant="body1" className={classes.catText}>
                            {error}
                        </Typography>}
                    </Grid>
                </Grid>
            )}

            {recentImages.length > 0 && <>
                <Typography variant="h5" className={classes.recentTitle}>Recent upload images</Typography>
                <Grid container spacing={0} className={classes.imageList}>
                    {recentImages.map(item => {
                        return (
                            <Grid item>
                                <img src={item.image} className={classes.imageListItem} />
                                <Typography variant="body1" className={classes.catText}>{item.class.className}</Typography>
                            </Grid>
                        )
                    })}
                    
                </Grid>
            </>}
        </Container>
    );
};

export default ImageDropzone;

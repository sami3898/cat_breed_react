
import "./HomePage.css";
import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tmImage from "@teachablemachine/image";
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

import HowItWorksSection from "../components/HowItWork";
import AboutSection from "../components/AboutSection";

import Footer from "../components/Footer";

function HomePage() {
    // State
    // const [model, setModel] = useState(null)
    const [image, setImage] = useState("");

    useEffect(() => {
        tf.ready().then(() => {
            loadModel();
        });
    }, []);

    // Todo: load model
    const loadModel = async () => {
        try {
            const url =
                "https://teachablemachine.withgoogle.com/models/Iu9IjtV6n/" +
                "model.json";
            const metaUrl =
                "https://teachablemachine.withgoogle.com/models/Iu9IjtV6n/" +
                "metadata.json";
            const tmModel = tmImage.load(url, metaUrl);
            const model = await tf.loadLayersModel(url);
            console.log(tmModel);
            // setModel(model)
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnChange = (e) => {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    const predictImage = async () => {
        try {
            const model = await mobilenet.load();
            // const url = 'https://teachablemachine.withgoogle.com/models/Iu9IjtV6n/' + 'model.json'
            // const model = await tf.loadLayersModel(url)
            const url =
                "https://teachablemachine.withgoogle.com/models/KNWFEAvhp/" +
                "model.json";
            const metaUrl =
                "https://teachablemachine.withgoogle.com/models/KNWFEAvhp/" +
                "metadata.json";
            const tmModel = tmImage.load(url, metaUrl);
            const pre = (await tmModel).predict(document.getElementById("img"));
            const predictions = await model.classify(
                document.getElementById("img")
            );
            pre.then((value) => {
                console.log(value);
                console.log(
                    value.reduce((prev, current) =>
                        prev.probability > current.probability ? prev : current
                    )
                );
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <div className="content-container">
                <Navbar />
                <HeroSection />
                <HowItWorksSection />
                <AboutSection />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;

import React, { useState } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";
import "./PredictPage.css"
import ImageDropzone from '../components/ImageDropZone';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function PredictPage() {

    const [uploadedImage, setUploadedImage] = useState("")

    

    return (
        <div className='App'>
            <div className='content-container'>
                <Navbar />
                <ImageDropzone onUploadImage={(image) => setUploadedImage(image)} />
            </div>
            <Footer />
        </div>
    )
}

export default PredictPage;
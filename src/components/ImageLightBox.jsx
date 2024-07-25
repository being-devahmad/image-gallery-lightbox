import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLightBox = ({ open, onClose, images }) => {

    return (
        <Lightbox
        open={open}
        close={onClose}
        slides={images.map((image) => ({
          src: image.src
        }))}
      />
    )
}

export default ImageLightBox

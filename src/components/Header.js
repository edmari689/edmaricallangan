import React from "react"; // in case that we don't need to use <div>
import IMAGES from "../images/PicIndex";

export default function Header () {
    return (
        <div>
            <picture>
                <img 
                //src={ require('../images/headerBack.jpg') } //2nd way
                src={IMAGES.topHeader} // alternative 1st way
                alt="Top Header Background" />
            </picture>
        </div>
    );
}
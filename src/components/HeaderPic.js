import React from "react"; // in case that we don't need to use <div>
import IMAGES from "../images/PicIndex";

export default function HeaderPic () {
    return (
        <div>
            <picture>
                <img className="header-style"
                //src={ require('../images/headerBack.jpg') } //2nd way
                src={IMAGES.topHeader} // alternative 1st way
                alt="Top Header Background" />
            </picture>
        </div>
    );
}
import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../images/PicIndex";

export default function Footer () {
    return (
        <div className="container">
            <h3>Contact Info</h3>
            <br />
            <p>edmari689@yahoo.com</p>
            <br />
            <picture>
            <Link to="https://www.linkedin.com/in/edmari-callangan-4909a6137/" className="logo">
                <img className="social-media-logo"
                src={IMAGES.linkedinIcon} // alternative 1st way
                alt="LinkedIn Profile Page" />
            </Link>
            <Link to="https://www.facebook.com/edmari.callangan/" className="logo">
                <img className="social-media-logo"
                src={IMAGES.facebookIcon} // alternative 1st way
                alt="Facebook Profile Page" />
            </Link>
            </picture>
            <p>Personally Created 2023, edmari689.github.io. Built using ReactJS</p>
        </div>
    );
}
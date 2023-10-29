import React from "react";
import { Link } from "react-router-dom";

export default function ItSamples () {
    return (
        <>
            <h3>IT Samples Link Directory</h3>
            <br />
            <Link to="/formvalidate">
                Basic Form Validation
            </Link>
            <br /><br />
            <Link to="/work-demo">
                Back to Previous Page
            </Link>
        </>
    );
}
import React from "react";
import { Link } from "react-router-dom";

export default function OtherSample () {
    return (
        <>
            <h3>Other Samples Link Directory</h3>
            <br />
            <Link to="/soundpage">
                Sound Works
            </Link>
            <Link to="/unreal">
                Unreal
            </Link>
            <br /><br />
            <Link to="/work-demo">
                Back to Previous Page
            </Link>
        </>
    );
}
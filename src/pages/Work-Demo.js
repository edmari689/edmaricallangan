import React from "react";
import { Link } from "react-router-dom";

export default function WorkDemo () {
    return (
        <>
            <h3>Work Demo Link Directory</h3>
            <br />
            <Link to="/teachingdemo">
                Teaching Demo
            </Link>
            <Link to="/it-samples">
                It Samples
            </Link>
            <Link to="/othersample">
                Other Samples
            </Link>
        </>
    );
}
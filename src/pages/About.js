import React from "react";
import { Link } from "react-router-dom";

export default function About () {
    return (
        <>
            <h3>About Link Directory</h3>
            <br />
            <Link to="/aboutme">
                About My Background
            </Link>
            <Link to="/aboutsite">
                About My Site
            </Link>
            <Link to="/credits">
                References Credited
            </Link>
        </>
    );
}
import React from "react";
import IMAGES from "../images/PicIndex";

export default function AboutSite () {
    return (
        <div>
            <h2>艱難汝を玉にす</h2>
            <h3>Adversity makes a man wise</h3>
            <br />
            <p>
                This site includes the profile background of Edmari Callangan 
                with professional experiences and work showcases.
                This presents off the general work samples with resources.
                This also displays more personal contents that they are not found in any
                resume format, and may be shown in social media sites.
            </p>
            <br />
            <picture>
                <img className="site-teach"
                src={IMAGES.teachSample}
                alt="Teaching Sample" />
            </picture>
            <p>
                One of site's showcase is the teaching sample demonstration that can show how
                capable is the teacher. This includes videos that target different student groups.
            </p>
            <br />
            <picture>
                <img className="site-code"
                src={IMAGES.codeSample}
                alt="Coding Sample" />
            </picture>
            <p>
                Another showcase is the coding sample where IT academic knowledge comes into a live performance
                in this site with mini projects. Depending on update progress, this site would be updated 
                with additional codes and pages in the future.
            </p>
            <br />
            <picture>
                <img className="site-note"
                src={IMAGES.noteSign}
                alt="Note Sign" />
            </picture>
            <p>
                Please note that the design of the site responding to your devices is not polished well
                with current state of the site. If there are some elements of the site that are not good in designs,
                feel free to reach out with the feedback by contacting to email address or Github profile.
            </p>
        </div>
    );
}
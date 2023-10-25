import React from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function SoundPage () {
    return (
        <div>
            <p>
                This page contains basic sound works that are created from Audacity software.
                This sound knowledge is simply based on one of college curriculum studies,
                multimedia subject, that included Adobe Audition learning studies.
                Please have a time to listen.
            </p><br />
            <AudioPlayer />
        </div>
    );
}
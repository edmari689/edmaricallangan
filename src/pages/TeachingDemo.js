import React from "react";
import Youtube from 'react-youtube';

export default function TeachingDemo () {
    return (
        <div>
             <h1>Teaching Demonstration</h1>
             <br />
            <Youtube videoId="FCPakGFN50k"/>
            <br />
            <p>
                This video has a simple English lesson suitable for very young students 
                to learn basic words. It has a song, basic repetitions, and a game.
            </p>
            <br />
            <Youtube videoId="uxvoN5UfWyQ"/>
            <br />
            <p>
                This video has an academic English lesson that teaches grammar usage
                to elementary students. It has a chant, basic repetitions, and an activity
                for them to do with English lesson.
            </p>
            <br />
            <Youtube videoId="cQEwzwFlpvc"/>
            <br />
            <p>
                This video has an intermediate English lesson includes four functions of language
                for high school students to use it. It has a dictation with writing exercise,
                and a grammar usage for them to think about how to use it with people.
            </p>
            <br />
        </div>
    );
}
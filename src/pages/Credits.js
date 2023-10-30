import React from "react";
import { Link } from "react-router-dom";

export default function Credits () {
    return (
        <>
            <h2>Learning Sources and Material References</h2>
            <br />
            <p>
                I give my thanks and credits to fellow guiding developers who help several youngsters 
                to build and code programs to show their meaningful works to the people in the world.
                <br />
                Here is the list of sources and references I use to build this overall project.
            </p>
            <br />
            <section className="creditContentLook">
            <h4>ReactJS References</h4>
            <br />
            <p>
                Code Stoic (Youtube Channel)<br />
            <Link to="https://www.youtube.com/@ashutoshpawar">
                https://www.youtube.com/@ashutoshpawar
            </Link> <br />
                How to create a multilevel dropdown menu in React - Ibadehin Mojeed<br />
            <Link to="https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/">
                https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
            </Link> <br />
            Building an audio player in React to play sound or music - Ibadehin Mojeed<br />
            <Link to="https://blog.logrocket.com/building-audio-player-react/">
                https://blog.logrocket.com/building-audio-player-react/
            </Link> <br />
                How To Create A Navbar In React With Routing<br />
            <Link to="https://www.youtube.com/watch?v=SLfhMt5OUPI">
                https://www.youtube.com/watch?v=SLfhMt5OUPI
            </Link> <br />
            Send Email With React (No Backend Required)<br />
            <Link to="https://www.youtube.com/watch?v=I4DKr1JLC50">
                https://www.youtube.com/watch?v=I4DKr1JLC50
            </Link> 
            </p><br />
            <h4>Git References</h4>
            <br />
            <p>
                Git Tutorial<br />
            <Link to="https://www.w3schools.com/git/">
                https://www.w3schools.com/git/
            </Link><br />
                How to Deploy React App to GitHub Pages | Step by step.<br />
            <Link to="https://www.youtube.com/watch?v=7wzuievFjrk">
                https://www.youtube.com/watch?v=7wzuievFjrk
            </Link> 
            </p><br />
            <h4>HTML and CSS References</h4>
            <br />
            <p>
                Learn Flexbox CSS in 8 minutes<br />
            <Link to="https://www.youtube.com/watch?v=phWxA89Dy94">
                https://www.youtube.com/watch?v=phWxA89Dy94
            </Link> 
            </p><br />
            <h4>Other References</h4>
            <br />
            <p>
                EmailJS<br />
            <Link to="https://www.emailjs.com/">
                https://www.emailjs.com/
            </Link> <br />
                Mixkit<br />
            <Link to="https://mixkit.co/">
                https://mixkit.co/
            </Link> <br />
            </p>
            </section>
        </>
    );
}
import React from "react";
import IMAGES from "../images/PicIndex";

export default function AboutMe () {
    return (
        <div>
            <h2>Greetings!</h2>
            <br />
            <picture>
                <img className="work-pic"
                src={IMAGES.workPic}
                alt="Work Profile" />
            </picture>
            <p>
                I am a former assistant language teacher (ALT) who have worked to teach English contents
                to students across Japanese public schools in Chiba prefecture, Japan with two years of experience.
                I am a certified TEFL instructor who studied TEFL online course for 120 hours. <br />
                My background does include not just English teaching experience, but also being graduated
                from a Philippine university in Davao City as an IT graduate.
            </p>
            <br />
            <picture>
                <img className="casual-pic"
                src={IMAGES.casualPic}
                alt="Casual Look" />
            </picture>
            <p>
                In my past work experiences, I have faced different working duties of being the assistant teacher
                collaborating with Japanese teachers to plan and work together in order to deliver English
                lessons very well. I also gained different teaching styles from past coworkers and TEFL course
                that I used for motivating students to grow with English knowledge. Sometimes, I have encountered
                obstacles that challenged my services to solve them using my knowledge and physical efforts.
                At most, I say that working with students and teachers gives me a great opportunity to experience
                in a different field of job in Japan. <br /><br />

                In my past academic journey, I have gone studying several languages to possess IT skills to show
                my capabilities in developing software and website. These languages include: C language (C, C++, C#),
                web development (HTML, CSS, JavaScript, PHP), Java, and Python. Other supplementing supports I learned
                are: MySQL, Cisco networking, physical assembly of computer parts, CMS such as WordPress, 
                and basic android development. Adobe basic lessons and elective courses like technopreneurship
                and basic game development are what I have studied before.
                I have achieved developing several IT projects to create with my past schoolmates to show
                not just theorems and software presentations, but also our delivery and performances in showing
                the projects.
            </p>
            <br />
            <picture>
                <img className="travel-pic"
                src={IMAGES.travelPic}
                alt="Travel Look" />
            </picture>
            <p>
                Aside from work, I do like listening to J-POP songs such as Anison music, playing badminton,
                taking photos of amazing scenery spots, attractions, things, and people, and reading Japanese comics.
                I love watching anime media that show amazing stories to tell.
                I am a game-loving person that favors RPGs with amazing stories, racing, fighting, cute casual playing,
                and shooting genres.
            </p>
            <br />
            <h2>案ずるより産むが易し </h2>
            <h3>It's easier to give birth than to think about it</h3>
        </div>
    );
}
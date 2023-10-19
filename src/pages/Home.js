import IMAGES from "../images/PicIndex";

function Hello (){
    return (
        <div className="">
            <h1>"It's easier to give birth than to think about it." </h1><br />
            <h2>Dwight D. Eisenhower</h2><br />
            <picture>
                <img className="home-firepic"
                src={IMAGES.homeFireworks}
                alt="Home Fireworks" />
            </picture>
            <br />
            <p>
                If you like to learn about Edmari Callangan, have a look at his about section at the navigation bar.
                <br />
                For his demonstrations, please check at work demo section with basic showcases.
            </p>
        </div>
    );
}

export default Hello;


/*
const name = "Saturn";

const displayMessage = () => {
    return "I pass the message";
};

function Hello (){
    return <h1>Hello '{name}' World! <br />{displayMessage ()}</h1>
}

const Hello = ()=> <h1>Hello 2nd World!</h1>
*/
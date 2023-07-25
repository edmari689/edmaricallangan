const name = "Saturn";

const displayMessage = () => {
    return "I pass the message";
};
function Hello (){
    return <h1>Hello '{name}' World! <br />{displayMessage ()}</h1>
}

/*
const Hello = ()=> <h1>Hello 2nd World!</h1>*/

export default Hello;
import {useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import '../looks/contactForm.css';

const Result =() => {
    return(
        <p>
            Your message has been successfully sent.
            Thank you for contacting me.
        </p>
    );
}

export default function Contact () {
    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const answer = window.confirm("Do you want to send the message?");
        if (answer) {
        emailjs.sendForm('service_k9golsj', 
        'template_3x3q6pe', form.current, 
        'FZyPKnyCzwh1e4oGh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
          );
          e.target.reset();
          showResult(true);
         console.log("Message is sent.");
         } 
         else {
        console.log("Message is not sent yet.");
         }
        
      };

    return (
        <div>
            <p>
                Feel free to contact me through my contact form or my email address: edmari689@yahoo.com. <br />
                If you like to comment and help on the codes of my site, please visit to my Github project site: 
                https://github.com/edmari689
            </p>
            <br />
            <h2>Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}
            className="form-control flex-center dir-column">
                <input type="text" placeholder="Full name"
                name="user_name" required />
                <input type="email" placeholder="Email"
                name="user_email" required />
                <input type="text" placeholder="Subject"
                name="subject" required />
                <textarea name="message" placeholder="Type the message"
                cols="50" rows="10" required></textarea>
                <button type="submit"
                className="--btn --btn-primary">Send</button>
                <br />
                {result ? <Result /> : null}
            </form>
            <br />
            <h2>"If opportunity doesn’t knock, build a door." </h2><br />
            <h3>Milton Berle</h3>
        </div>
    );
}
import React from "react";
import { useState } from 'react';

export default function FormValidate () {
    const [username, SetUsername] = useState('');
    const [isValid, SetIsValid] = useState(true);

    const handleUsernameChange = (e) => {
        const input = e.target.value;
        const isValidInput = /^[a-zA-Z0-9]+$/.test(input);
        SetUsername(input);
        SetIsValid(isValidInput);
    }

    const handleCheck = (e) => {
        e.preventDefault();
        if(isValid){
            console.log("You have the correct username with: " + username);
        }
        else {
            console.error("Invalid username. Please input only a-z, A-Z, and 0-9.");
        }
    };

    return(
        <>
            <h3>This is the form validation page.</h3><br />
            <form className="form-display1" onSubmit={handleCheck}>
                <label>Username: </label>
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={handleUsernameChange}
                    required
                />
                <button type="submit">Check</button>
            </form>
        </>
    )
}
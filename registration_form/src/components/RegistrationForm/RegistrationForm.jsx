import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./RegistrationForm.scss"

const RegistrationForm = ({ handleAddUser }) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuidv4(),
            fullName,
            email,
            password
        };

        handleAddUser(newUser);

        setFullName("");
        setEmail("");
        setPassword("");
        // console.log(newUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                minLength={8}
                maxLength={30}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={10}
                maxLength={25}
            />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
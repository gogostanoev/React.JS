// Exercise 1.5: Functional Component
// Create a functional component Academies

// Render this component in App.

// The component should accept 2 props: acedemies (array of academy objects), name.

// In "h2" Element print the name property

// In "div" map through the academies and render each academy with it's props. The academy name should be in "h3", and description in "p"

// NOTE: Academy object should look as {id: string, name: string, description: string}

// BONUS: Create class component Acedemy, that will accept one prop called academy (this is the academy object). In the previous requirement, 
// when iterating though the array of academies instead of rendering the "h3" and "p" with the coresponding values, render this component Academy 
// and provide the academy object as props. Now the "h3" and "p" should be part of the Academy component and should render the coresponding values.     

import React from "react";
import Academy from './Academy';
import './Academy.css';

const Academies = ({ academies, name }) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                {academies.map((academy) => (
                    <Academy key={academy.id} academy={academy} />
                ))}
            </div>
        </div>
    )
}


export default Academies;
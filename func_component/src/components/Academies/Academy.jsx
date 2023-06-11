// BONUS: Create class component Acedemy, that will accept one prop called academy (this is the academy object). In the previous requirement, 
// when iterating though the array of academies instead of rendering the "h3" and "p" with the coresponding values, render this component Academy 
// and provide the academy object as props. Now the "h3" and "p" should be part of the Academy component and should render the coresponding values.



import React from "react";

class Academy extends React.Component {
    render() {
        const { academy } = this.props
        return (
            <div>
                <h3>{academy.name}</h3>
                <p>{academy.description}</p>
            </div>
        )
    }
}

export default Academy;
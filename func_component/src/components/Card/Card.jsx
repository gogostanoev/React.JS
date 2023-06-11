// Exercise 1: Functional Component
// Create a functional component called Card that takes in three props: title and content and imageUrl.
// Inside the component, render a "div" element that displays the title in an "h2" heading and the content in a p paragraph, and the imageUrl in "img".
// Invoke the Card component in the App component at least 5 times with different values. Make sure atleast one of the card's component props values are variable.


import "./Card.css"

const Card = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <img src={props.imageUrl} alt="credit-card.png"/>
        </div>
    )
}

export default Card;
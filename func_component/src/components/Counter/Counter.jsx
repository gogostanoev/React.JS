// Exercise 2: Class Component and State Management
// Create a class component called Counter that has an initial state value of count set to 0.
// Render a "div" element that displays the current value of count inside a "p" paragraph.
// Additionally, include two buttons labeled "Increment" and "Decrement" below the displayed count.
// When the "Increment" button is clicked, the count state should be increased by 1, and when the "Decrement" button is clicked, the count state should be decreased by 1.
// BONUE: Ensure that the count value does not go below 0.
// Create button "Reset" and when clicked should set the count to 0.
// Create a "span" element next to the count that displays the word "Even" if the current count is an even number, and "Odd" if count is odd number.
// Render the Count component in the App Component.
// Add input type:number, when the field changes on user input, update the count state to the new value. (HINT: use onChange event.)


import React from "react";
import './Counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    };

    incrementValue = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    decrementValue = () => {
        // if(this.state.number > 0){
        //     this.setState({
        //         number: this.state.number - 1
        //     });
        // };

        this.setState({
            number: this.state.number > 0 ? this.state.number - 1 : 0
        });
    };

    resetValue = () => {
        this.setState({
            number: 0
        });
    };

    inputValue = (e) => {
        this.setState({
            number: parseInt(e.target.value)
        })
    }

    render() {
        const isEven = this.state.number % 2 === 0;

        return (
            <div>
                <p>Current value is: {this.state.number}</p>
                <span>{isEven ? 'Even' : 'Odd'}</span>
                <br />
                <button onClick={this.incrementValue}>Increment</button>
                <button onClick={this.decrementValue}>Decrement</button>
                <button onClick={this.resetValue}>Reset</button>
                <br />
                <input type="number" value={this.state.number} onChange={this.inputValue} />
            </div>
        );
    };
}

export default Counter;
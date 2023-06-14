// Starwars fan page
// Requirements:
// Create a class component called CharactersPage, and invoke it in App.jsx

// Inside CharactersPage, initialize the component state with a property called characters, initially set to an empty array.

// Implement the componentDidMount() lifecycle method in CharactersPage.

// Within componentDidMount(), make an API request using the fetch function to retrieve character data from the following URL: https://swapi.dev/api/people.

// Once the character data is fetched and received successfully, update the characters state property with the retrieved data.

// Create a class component called Character that accepts a character prop.

// Inside the Character component, display the following information dynamically: name, height, gender, and birth year, using the data passed through the character prop.

// Within the CharactersPage component, map over the characters array in the state, and for each character, render a Character component, passing the character data as a prop.

// NOTE: Style the page as per your preference, utilizing basic CSS or CSS frameworks to enhance the user experience.But please have in mind and do not put to much attention to the css and styling since this is React class.


import { Component } from "react";
import Character from "../Character/Character";
import "./CharactersPage.css"

class CharactersPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    };

    async componentDidMount() {
        try {
            const res = await fetch("https://swapi.dev/api/people");

            if (res.status >= 400) {
                return this.setState({
                    errorCode: res.status
                });
            };

            const data = await res.json();
            // console.log(data) // vraka objekt so vrednosti
            
            const { results } = data;
            // console.log(results) // vraka niza so objketi(toa shto e potrebno za da napravi update)

            return this.setState({
                characters: results
            });

        } catch (err) {
            console.error(err);
            return this.setState({error: err});
        };
    };

    render() {
        const { characters } = this.state;
        const isLoading = characters.length === 0;

        return (
            <div>
                <h1 id="title">Star Wars Characters</h1>

                <br />
                <br />
                {isLoading ? (
                    <h2 className="loading">Loading...</h2>
                ) : (
                    <div> 
                    {characters.map((character, index) => (
                        <Character key={index} character={character} />
                    ))}
                </div>
                )}
            </div>
        )
    }
}

export default CharactersPage;
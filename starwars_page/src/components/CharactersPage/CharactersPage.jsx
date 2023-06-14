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

                {/* <br />
                <br /> */}
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
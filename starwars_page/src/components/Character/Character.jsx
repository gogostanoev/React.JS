import { Component } from "react";
import "./Character.css"

class Character extends Component {
    render() {
        const { character } = this.props;

        return (
            <div className="character">
                <h2>{character.name}</h2>
                <p>Height: {character.height}</p>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <hr />
            </div>
        );
    };
};

export default Character;
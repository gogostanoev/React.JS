import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./SingleCharacter.css"

export const SingleCharacter = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [homeworld, setHomeworld] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://swapi.dev/api/people/?search=${id}`);
                const data = await res.json();
                console.log(data)

                if (data.results.length > 0) {
                    setCharacter(data.results[0]);
                    const homeworldResponse = await fetch(data.results[0].homeworld);
                    const homeworldData = await homeworldResponse.json();
                    setHomeworld(homeworldData);
                }
            } catch (error) {
                setErrorMessage(error.message);
                console.log(error);
            };
        };

        fetchData();
    }, [id]);

    if (!character || !homeworld) {
        return <h2 className="loading">Loading...</h2>;
    }

    return (
        <div className="currentChar">
            <h1>Current Character Info</h1>
            <hr />
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
            <p>Birth Year: {character.birth_year}</p>
            <br />
            <h2>Homeworld</h2>
            <p>Name: {homeworld.name}</p>
            <p>Diameter: {homeworld.diameter}</p>
            <p>Climate: {homeworld.climate}</p>
            <p>Gravity: {homeworld.gravity}</p>
            <p>Terrain: {homeworld.terrain}</p>
            <p>Population: {homeworld.population}</p>
            <br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};
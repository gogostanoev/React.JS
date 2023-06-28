import { useEffect, useState } from "react";
import { PlanetsInfo } from "../../Components/PlanetsInfo/PlanetInfo";
import { useNavigate } from "react-router";
import "./Planets.css";

export const Planets = () => {
    const URL = "https://swapi.dev/api/planets/"

    const [planets, setPlanets] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const getPlanets = async () => {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data)
            setPlanets(data.results)
        } catch (error) {
            setErrorMessage(error.message);
            throw new Error(error);
        };
    };

    useEffect(() => {
        if (planets.length > 0) return;
        getPlanets();
    }, []);

    return (
        <div className="star-planets">
            <h1>Star Wars Planets</h1>

            <hr />
            <br />

            {planets.length > 0 ? (
                <div>
                    {planets.map((planet) => (
                        <PlanetsInfo key={planet.name} planet={planet} />
                    ))}
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            ): (
                <div className="loading">
                    <h2>Loading planets...</h2>
                </div>
            )}
        </div>
    );
};
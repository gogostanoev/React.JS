import { useEffect, useState } from "react";
import { MovieInfo } from "../../Components/MovieInfo/MovieInfo";
import "./Home.css"

export const Home = () => {
    const URL = "https://swapi.dev/api/films/";

    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const getAllMovies = async () => {
        try {
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (error) {
            setErrorMessage(error.message);
            throw new Error(error);
        };
    };

    useEffect(() => {
        if (movies.length > 0) return;
        getAllMovies();
    }, []);
    

    return (
        <div>
            <h1 className="title">Welcome to Star Wars!</h1>

            <hr />
            <br />

            {movies.length > 0 ? (
                <div className="movies">
                    {movies.map((movie) => (
                        <MovieInfo key={movie.episode_id} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="loading">
                    <h2>Loading movies...</h2>
                </div>
            )}
        </div>
    );
};
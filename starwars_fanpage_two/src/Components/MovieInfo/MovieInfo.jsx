import "./MovieInfo.css"

export const MovieInfo = (props) => {
    const { movie } = props

    return (
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>Opening Crawl: {movie.opening_crawl}</p>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            <p>Release Date: {movie.release_date}</p>
            <br />
            <hr />
        </div>
    );
};
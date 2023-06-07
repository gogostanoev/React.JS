import {v4 as uuidv4} from 'uuid';
import './MoviesList.css'


const MoviesList = () => {

    const trainer = 'Gjorge';
    const assistant = 'Aneta';

    const moviesArray = [
        {id: uuidv4(), title: 'Interstellar', director: 'Christopher Nolan'},
        {id: uuidv4(), title: 'Edge of Tomorrow', director: 'Doug Liman'},
        {id: uuidv4(), title: 'For a Few Dollars More', director: 'Sergio Leone'},
        {id: uuidv4(), title: 'Iron Man', director: 'Jon Favreau'},
        {id: uuidv4(), title: 'Hereditary', director: 'Ari Aster'},
        {id: uuidv4(), title: 'Pacific Rim', director: 'Guillermo del Toro'},
        {id: uuidv4(), title: 'Fight Club', director: 'David Fincher'},
        {id: uuidv4(), title: 'Harry Potter', director: 'David Yates'},
        {id: uuidv4(), title: 'American Psycho', director: 'Mary Harron'},
        {id: uuidv4(), title: 'E.T. the Extra-Terrestrial', director: 'Steven Spielberg'}
    ];


    const titleStyle = (title) => {
        return title.length > 12 ? 'movieTitle movieTitleLong' : 'movieTitle movieTitleShort'
    };


    return (
        <div>
            <h4>Greetings {trainer} and {assistant}, I will present to you my movie list!</h4>
            <ul>
                List of movies:
                {
                    moviesArray.map((movie) => {
                        return (
                            <li key={movie.id} className={titleStyle(movie.title)}>Movie name: {movie.title}, directed by: {movie.director}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}


export default MoviesList;
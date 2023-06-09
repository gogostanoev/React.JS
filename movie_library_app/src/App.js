// Create react app called movie library app
// Create component called MoviesList
// In the component have array of 10 movies
// In the movie list component show welcome message to the user. ( Some of the contents of the message should be in variables of you choice.)
// Render the movies in the screen
// Call the MovieList component in the App component
// Bonus: Add some styling using css files for the movies list component

import './App.css';
import MovieList from "./components/MoviesList/MoviesList.js"

function App() {
  return (
    <div className="App">
      <h1>This is my first React homework.</h1>

      <hr />

      <MovieList />
    </div>
  );
}

export default App;

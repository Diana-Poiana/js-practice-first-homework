const numberOfFilms = +prompt('How many movies did you watch?', '');

console.log(numberOfFilms);


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Which movie was the last you have seen?', '');
const b = prompt('What is your raiting for this movie?', '');
const c = prompt('Which movie was the last you have seen?', '');
const d = prompt('What is your raiting for this movie?', '');



lastWatchedMovie = a;

lastWatchedMovieRating = b;

console.log(a);
console.log(b);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);






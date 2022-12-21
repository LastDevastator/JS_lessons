

const numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?' , '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?", '');
const q2 = prompt("На сколько оцените его?", '');
const q3 = prompt("Один из последних просмотренных фильмов?", "");
const q4 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;
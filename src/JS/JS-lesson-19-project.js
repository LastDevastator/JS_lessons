const numberOfFilms = +prompt('сколько ильмов Вы посмотрели?', '')

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actroes: {},
    genres: {},
    privat: false
}

const a = prompt ('Один из последних фильмов'),
      b = prompt ('Оцените его пжлст'),
      c = prompt ('Один из последних фильмов'),
      d = prompt ('Оцените его пжлст')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)
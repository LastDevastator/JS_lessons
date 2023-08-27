// for (let i = 5; i < 11; i++){

//   console.log(i);
// }



// for (let i = 20; i>9; i--){

//     if (i === 13) { break };
//     console.log(i);
    
// }



// for (let i = 1; i<11; i++){

//   if (!(i % 2)) {
//     console.log(i)
//   };
// }


// let i = 2;

// while (i <= 15) {

//     i++;

//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }

// }


// let arrayOfNumbers = []


//  console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++){

//     result[i] = arr[i];

// }

// console.log(result)


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++){

//     if (typeof (data[i]) == 'string') {
//     data[i] = data[i] +  ' - done'
//     }
//     else (
//     data[i]=data[i] * 2
//     )

// }



// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
//     result[i] = data[4 - i];

// }

// console.log(result)


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i == ){
//     for (let j = 0; j <= 10; j++)





// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)


// number of films project



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  
  start: function (){
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
 
      const a = prompt('Щдн из последних просмотреных фильмов?', '');
      const b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
 
        personalMovieDB.movies[a] = b;
        console.log('done');
 
      } else {
 
        console.log('error');
 
      }

    }
  
  }  ,
  detectPersonalLevel: function() {
  if (personalMovieDB.count < 10) {44477
    console.log('просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
     console.log('произошла ошибка');
  }

  },
  
  showMyDb: function (hidden) {
   if (!hidden) {
     console.log(personalMovieDB)
   }
}, 

  toggleVisibleMyDS: function () {

    if (personalMovieDB.privat) {
      personalMovieDB.privat = false
    } else {
      personalMovieDB.privat = true
    }

  },
  

  writeYourGenres: function () {
  
  
    for (let i = 1; i <= 3; i++) {

      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === "" || genre === null) {
        console.log('хуевые данные');
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр № ${i+1} это ${item}`)
    })

  }
 

  
};



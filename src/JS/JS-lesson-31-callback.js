// Callback функции - скармливаем функцию другой функции

// function first() {
//   // do smthg
//   setTimeout(function () { console.log(1) }, 500);
// }

// function second(){
//   console.log(2);

// }

// first()
// second()


// //скормили функцию функции

function learnJS(lang, callback) {
  console.log(`я учу ${lang}`);
  callback();
}


function done() {
  console.log('ya krosavcheg');
}

learnJS('JavaScript', done);
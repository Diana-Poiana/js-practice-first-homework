/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies did you watch?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies did you watch?', '');
  }
}

start();

console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (i = 0; i < 2; i++) {
    const a = prompt('Which movie was the last you have seen?', '');
    const b = prompt('What is your raiting for this movie?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done!');
    } else {
      console.log('Error!');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Not a lot!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('That is great!');
  } else if (personalMovieDB.count >= 30) {
    console.log('A lot of movies, good job!');
  } else {
    console.log('Error happened!');
  }
}

detectPersonalLevel();

console.log(personalMovieDB);

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// function shomMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   }
// }

// shomMyDB();

function shomMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

shomMyDB(personalMovieDB.privat);


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();




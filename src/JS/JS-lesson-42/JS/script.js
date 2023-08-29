'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'black'
// box.style.width = '500px'

btns[3].style.backgroundColor = 'green'
btns[2].style.borderRadius = '20%'

circles[1].style.backgroundColor ='black'

box.style.cssText = 'background-color: black; width: 700px'

// for (let i = 0; i < hearts.length; i++){

//   hearts[i].style.cssText = 'background-color: black; width: 700px'

// }

console.log('btns - ', typeof (btns))
console.log('circles - ', typeof (circles))
console.log(typeof (hearts))
console.log(typeof(box))


hearts.forEach(item => {

  item.style.backgroundColor = 'green'

})

const div = document.createElement('div'); // добавляем элемент через Джаву
div.classList.add('black')

document.body.append(div)
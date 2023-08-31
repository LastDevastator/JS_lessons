const btn = document.querySelector('button')

// btn.onclick = function () {
  
//   console.log('im pushed')
//   alert('click')

// }


let i=0


btn.addEventListener('click', (e) => {
  i++
  console.log('click')
  console.log(i)
})
  if (i == 5) {
    btn.removeEventListener('click', deleteElement)
  }

btn.addEventListener('mouseenter', (e) => {
  
  console.log('mouse trapped')

})


// const deleteElement = (e) => {
//   console.log(e.target);
//   i++
//   if (i == 5) {
//     btn.removeEventListener('click', deleteElement)
//   }
  
// }



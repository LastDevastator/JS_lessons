'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  
  arr.sort()

  let group_1 = []
  let group_2 = []
  let group_3 = []
  let rest = ""
  let result = []

  for (let i = 0; i < arr.length; i++){
    
    if (i < 3) {
      group_1.push(arr[i])
    }
    if (i >= 3 && i < 6) {
      group_2.push(arr[i])
    }
    if (i >= 6 && i < 9) {
      group_3.push(arr[i])
      rest = 'Оставшиеся студенты: -'
    }
    if (i === 9 ) {
      rest = `Оставшиеся студенты: ${arr[i]}`
    }
    if (i > 9) {
      rest += `, ${arr[i]}`
    }

  }

  result = [group_1 , group_2 , group_3, rest]
  return result

}

console.log(sortStudentsByGroups(students))
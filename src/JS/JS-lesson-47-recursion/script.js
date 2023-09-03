// function pow(x, n) {
//   let result = 1
  
//   for (let i = 0; i < n; i++) {
//     result *= x
//   }
  
// return result
// }

// function pow(x, n) {
//   if (n == 1) {
//    return x 
//   } else {
//     return x*pow(x, n-1)
//  }
// }


// console.log(pow(2, 16))


let students = {
  js: [
    {
      name: 'Boris',
      progress:100
    },{
      name: 'Frirz',
      progress: 100
    }
  ],

  html: {
    basic: [
       {
      name: 'Simona',
      progress:100
    },{
      name: 'Monica',
      progress: 50
    }
    ],
    
    pro: [
      {
      name: 'Andreas',
      progress:50
      },{
      name: 'Manuela',
      progress: 50 
      }
    ]

  }

}

// obj1 = {
  
//   ker: "val",
//   ker2:"vla3"

// }

//// ------------------------------------------------------------------------------------------

console.log(Object.values(students))  
 
function getTotalProgredd(data) {
  let total = 0
  let students = 0

  for (let course of Object.values(data)){
    
    if (Array.isArray(course)) {
      
      students += course.length;
    
        for (let i = 0; i < course.length; i++){
          total += course[i].progress;
        }
    } else {

      for (let subCourse of Object.values(course)) {
        students += subCourse.length  

         for (let i = 0; i < subCourse.length; i++){
          total += subCourse[i].progress;
        }
      }
    }
  }
  console.log("students", students)
  return (total / students)
}

console.log(getTotalProgredd(students))

//// ------------------------------------------------------------------------------------------


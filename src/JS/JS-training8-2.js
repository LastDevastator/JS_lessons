function findMaxNumber(arg1, arg2, arg3, arg4) {

  let result = arg1;

  if (arg2 > result) { result = arg2; }
  if (arg3 > result) { result = arg3; }  
  if (arg4 > result) { result = arg4; } 

  if (typeof(arg1) !== 'number' ||
      typeof(arg2) !== 'number' ||
      typeof(arg3) !== 'number' ||
      typeof(arg4) !== 'number') {
     
      result = 0;
    
  }


  console.log(arg1,arg2,arg3,arg4)

  return result

}


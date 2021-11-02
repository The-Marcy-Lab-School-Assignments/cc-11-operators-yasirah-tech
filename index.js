//1
function areBothSame(value1, value2){
  if (value1 == value2) {
    return true;
  } else {
    return false;          
  }
}
console.log(areBothSame(10, 6))


//2
function areBothEqual(value1, value2){
  if (value1 === value2) {
    return true;
  } else {
    return false;          
  }
}
console.log(areBothSame(10, "6"))

// function areBothEqual(value1, value2){
// return (value1 === value2 ? true : false);


//3
  function areAllFourEqual(value1, value2, value3, value4){
  if (value1 === value2 && value1 === value3 && value1 === value4 ) {
    return true;
  } else {
    return false;          
  }
}
console.log(areAllFourEqual(10, 5, 10,10))



//4
  function areAllFourSame(value1, value2, value3, value4){
  if (value1 == value2 && value1 == value3 && value1 == value4 ) {
    return true;
  } else {
    return false;          
  }
}
console.log(areAllFourSame(10, "10", 10,10))


//5
 function areAllFourSameOrEqual(value1, value2, value3, value4){
  if (value1 == value2 && value1 == value3 && value1 === value4 || value1 === value2 && value1 === value3 && value1 === value4 ) {
    return true;
  } else {
    return false;          
  }
}
console.log(areAllFourSame(10, "10", 10,10))
 




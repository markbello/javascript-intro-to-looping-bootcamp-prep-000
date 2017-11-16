function forLoop(array){
  )
  for(let i = 0; i =< 25; i++){
    if(i == 1){
      arr.push('I am 1 strange loop.');
    } else{
      arr.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(n){
  while(n > 0){
    console.log(n);
    n--;
  }
}

function doWhileLoop(arr){
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do{
    arr.shift();
  } while(arr.length > 0 && maybeTrue());
  return arr;
}

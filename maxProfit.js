//input is [128, 97, 121, 123, 98, 97, 105]
//max profit, at each index split the array from the prevous indexes
//compare the max profit for that given day to each following day
//if the max is higher than the previous max, that will replace the value
let myArray=[128, 97, 121, 123, 98, 97, 105];

const maxProfit=(array, max=null, day=0) => {
  if (array.length === 1){
    return `The max profit of ${max} occured on day ${day + 1}`
    //highest difference
  }

  for (let i =0; i<array.length; i++){
    let difference = array[i] - array[0]
    console.log(max);
    let maxDay = i;
    if(difference > max){
      max = difference;
      day = maxDay;
      console.log(maxDay)
    }
  } 

  return maxProfit(array.slice(1, array.length), max, day);
}


//console.log(myArray.slice(1, myArray.length));

console.log(maxProfit(myArray));
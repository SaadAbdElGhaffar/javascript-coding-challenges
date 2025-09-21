function convert(n){
 let   numbertostring =n.toString();
  
let arr = [...numbertostring];
arr = arr.reverse();
for(let i = 0; i < arr.length;i++)
{
    arr[i] = Number(arr[i]);
}
  return arr}

// Testing Ouput
console.log(convert(564987654))  // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)) // [2, 3, 1, 9, 2, 5]
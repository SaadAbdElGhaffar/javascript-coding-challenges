function wordBeforeLastLength(sentence) {
   let s= sentence.split(" ")
let ss = s.filter((e)=>e.length >=2

);
return ss.length>=2? ss[ss.length-2]:"False";
  }
  
  console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
  console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
  console.log(wordBeforeLastLength("Hello")); // False
  console.log(wordBeforeLastLength("Hello Elzero")); // Hello
  console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello
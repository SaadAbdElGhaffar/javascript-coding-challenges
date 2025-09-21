function checkNumber(n,arr)
{
let c1=false ,c2=false;
for(let i =0;i<arr.length;i++)
{
    if(n-1 === arr[i])
    {
        c1=true;
    }
    if(n+1 === arr[i])
    {
        c2=true;
    }
}
console.log(c1 && c2 ? "True":"Flase");
}
let arrayOfNumbers = [1, 2, 4, 10, 20, 12];
checkNumber(11, arrayOfNumbers); // True => "10 | 11 | 12"
checkNumber(3, arrayOfNumbers); // True => "2 | 3 | 4"
checkNumber(5, arrayOfNumbers); // False
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

 my =my.slice(zero,counter + +true).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];


console.log(my.slice((counter - +true - +true),counter)); // ["Elham", "Mazero"]


console.log(my.slice((counter - +true - +true),counter)[zero].slice(zero,counter - +true) + my.slice((counter - +true - +true),counter)[+true].slice(counter - +true)); // "Elzero"


console.log((my.slice((counter - +true - +true),counter)[zero].slice(zero,counter - +true) + my.slice((counter - +true - +true),counter)[+true].slice(counter - +true)).slice(counter + +true)[zero]+((my.slice((counter - +true - +true),counter)[zero].slice(zero,counter - +true) + my.slice((counter - +true - +true),counter)[+true].slice(counter - +true)).slice(counter + +true)[+true].toUpperCase())); // "rO"
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(d));//2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,(Math.floor(d)))); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d)); // 2
console.log(Math.round(d)); // 2
console.log(+d.toFixed(0)); // 2
console.log(Math.trunc(d)); // 2


// Use Variables b + d To Get This Valus
console.log((((Math.floor(b))/(Math.ceil(d))).toFixed(2)).toString()); // 66.67 => String
console.log(Math.ceil((Math.floor(b))/(Math.ceil(d)))); // 67 => Number
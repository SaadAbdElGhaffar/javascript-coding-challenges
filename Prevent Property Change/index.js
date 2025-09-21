// The Main Object
const myObject = {
    a: 1,
    b: 2,
    c: 3
  }
  
  Object.defineProperty(myObject,"c", {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  
  myObject.c = 100;
  console.log(myObject.c); // 3
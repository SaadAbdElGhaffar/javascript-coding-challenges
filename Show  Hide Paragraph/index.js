let btn = document.querySelector("button");
let p =document.querySelector("p");
let c = 2;
btn.onclick=function(){
if(c%2===0){
 p.style.display ="none";
 c++;
}else{
    p.style.display ="block";
c++
}
}
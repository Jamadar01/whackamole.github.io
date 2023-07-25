//let cov=document.querySelectorAll('.overlay');
//let target=document.querySelectorAll('.cover');
let c=0;
let inter;
let score=0;

let bad=document.querySelectorAll('.elements');
let newele=document.createElement('img');
let a=[];
let b=1000;
let box=document.querySelectorAll('.box');
box[0].innerText=score;
let sc=document.querySelectorAll('img');
function start(){
   
   
   newele.src='target.png';
   c=c+5;
   a=['26% 26%','75% 26%','125% 26%','26% 78%','75% 78%','125% 78%','26% 130%','75%  130%','125% 130%'];
   
  //newele.style.transformOrigin='26% 26%';//-1
  
  //newele.style.transformOrigin='75% 26%';//-2
  
   // newele.style.transformOrigin='125% 26%'//-3
   //newele.style.transformOrigin='26% 78%';//-4
   //newele.style.transformOrigin='26% 130%';//-7
   
  inter=setInterval(myfun,100+b -c);
  
  
  
   
}
function l1(){
   b=2000;

}
function l2(){
   b=1000;

}
function l3(){
   b=500;

}
newele.addEventListener('click',count);
function count(){
   score=score+1;
   box[0].innerText=score;
   }

function myfun() {
   let i=Math.floor(Math.random()*9);
   newele.style.transformOrigin=a[i];
   bad[0].appendChild(newele);
   
}
function stop(){
   clearInterval(inter);

}



//newele.style.transformOrigin='13% -0%'-media query-1
 //newele.style.transformOrigin='44% -0%';//media query-2
  //newele.style.transformOrigin='74% -0%'//mediaquery -3
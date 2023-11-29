

/* foreach kullanımı */

var r1=document.querySelector('#result1');


var arr1=['deneme1','deneme2','deneme3','deneme4','deneme5'];

arr1.forEach(function(par,index){
    ++index;
    r1.innerHTML+=index +'.Elemena '+par+"<br>";
});


/* Destructuring Assignment Kullanımı - Çoklu Değer Atama */

/*



*/

let result=document.querySelector('#result');

let arr1=['javascript','angular js','react js','vue js','node js','php','asp.net','html5','css3','coldfusion'];

let l1=arr1[0];
let l2=arr1[1];
let l3=arr1[2];
let l4=arr1[3];

result.innerHTML=l1+l2+l3+l4;

/* ecmasscript6 ile çoklu değer atama */

/* dizilerde çoklu değer atama */
let [a0,,a2,,a4,a6,,a8]=arr1; /* bu şekilde çoklu atama yapabiliriz tek tek uğraşmak yerine */
result.innerHTML=a0+"<br>"
+a2+"<br>"
+a4+"<br>"
+a6+"<br>"
+a8;


/* nesnelerde çoklu değer atama */
let person={firstname:'deneme1',lastname:'deneme2',age:30};
/* 1.yöntem */
let {firstname,age}=person;
result.innerHTML=firstname+"<br>"
+age;

/* 2. yöntem */
let d={firstname,age}=person;
result.innerHTML=d.firstname+"<br>"+d.age;
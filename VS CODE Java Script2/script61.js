

/* Spread operatör kullanımı */

/*



*/

var r1=document.querySelector('#result1');
var r2=document.querySelector('#result2');
var r3=document.querySelector('#result3');
var r4=document.querySelector('#result4');
var r5=document.querySelector('#result5');

let arr1=[
    'php',
    'asp.net',
    'javascript',
    'c sharp',
    'angular js'
];

var arr2=['MsSql','MySql','Sqlite','Oracla','PSql'];


let arr3=[...arr1,...arr2]; /* spread operatörü ile iki diziyi birleştirdik */

r1.innerHTML=arr3;


let numbers=[2,3,5];

function sum(x,y,z)
{
    return x+y+z;
}

/* 2,3,5 x değişkenine atadı y ve z undefined olarak getirdi diziyi x değişkenine atadı */
r2.innerHTML=sum(numbers);

/* bu şekilde yazarsak çalışır 2,3,5 değerlerini toplar ve 10 değerini verir */
r3.innerHTML=sum(numbers[0],numbers[1],numbers[2]);


/* yukarıdaki işlemleri yapmak yerine spread operatörünü kullanarak bu şekilde yine 2,3,5 değerlerini toplatıp 10 sonucuna varırırz
bu işlem daha basit ve kolaydır bu yöntem diziyi parametrelerine ayırarak 3 parça olarak gönderir */
r4.innerHTML=sum(...numbers);
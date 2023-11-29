
/* Generators Kullanımı */

/*
    generators function tanımlarken * konur yield ile hangi değerin çağrılacağı belirtilir 
    işlem bitmedi ise false işlem bitti ise done değeri true olarak döner



*/

var r1=document.querySelector('#result1');
var r2=document.querySelector('#result2');
var r3=document.querySelector('#result3');
var r4=document.querySelector('#result4');
var r5=document.querySelector('#result5');
var r6=document.querySelector('#result6');
var r7=document.querySelector('#result7');
var r8=document.querySelector('#result8');
var r9=document.querySelector('#result9');
var r10=document.querySelector('#result10');


function* gen()
{
   yield    r1.innerHTML='1. sıradaki';   /*  done false döner çünkü işlem bitmedi */
   yield    r2.innerHTML='2. sırdaki';    /*  done false döner çünkü işlem bitmedi */
   yield    r3.innerHTML='3. sıradaki';   /*  done false döner çünkü işlem bitmedi */
   yield    r4.innerHTML='4. sıradaki';   /*  done false döner çünkü işlem bitmedi */
   return   r5.innerHTML='5. sıradaki';  /* return diyor yani bittiğini bildiriyor burda done true döner çünkü işlem bitti burda return görünce */
}

let newgen=gen();
/* burada işlem bitmediği için done false olarak gelir */
let item1=newgen.next();
r6.innerHTML='deger: '+item1.value+' done: '+item1.done+"<br>";

item1=newgen.next();
r7.innerHTML='deger: '+item1.value+' done: '+item1.done+"<br>";
item1=newgen.next();
r8.innerHTML='deger: '+item1.value+' done: '+item1.done+"<br>";
item1=newgen.next();
r9.innerHTML='deger: '+item1.value+' done: '+item1.done+"<br>";
/* burada işlem bittiği için done true olarak gelir */
item1=newgen.next();
r10.innerHTML='deger: '+item1.value+' done: '+item1.done+"<br>";

newgen.next();  /* next diyerek çağırma işlemi yapıyorum */
newgen.next();
newgen.next();
newgen.next();
newgen.next();



function* sum()
{
    let x=yield 'deger1';
    let y= yield 'deger2';
    let z=yield 'deger3';
    return x*y*z;
}

let newsum=sum();


console.log(newsum.next()); /* bu ilk değeri boş bıraktık yield deger1 işlemini yapıyor onu geçip x ,y,z değerlerine geliyoruz */
console.log(newsum.next(2));
console.log(newsum.next(3));
console.log(newsum.next(4));






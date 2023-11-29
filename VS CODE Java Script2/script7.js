
/*number veri türleri */

/*
    sayılar için tek bir veri türü vardır number olarak ifade edilir 
    tam sayı veya ondalıklı sayı farketmez hepsi için number tanımı kullanılır
    
    tam sayılar 15 haneye kadardır maksimum ondalıklı sayı 17 basamaklıdır

    inNaN() = bir değerin sayı olup olmadığını öğrenmek için isNaN() metodunu kullanabiliriz 
    NaN matematiksel işlemler için kullanırsak sonuçta NaN olacaktır eğer sonuç sayı ise false döner değil ise true değer döner
    NaN demek not a number demek bir sayı dğil demek

    Infinity ve -Infinity = olası en büyük sayı dışında bir sayı hesaplarsak javascriptin döneceği değerdir sonsuz değerine gelince infinity
    değerini döner

    bir sayıyı 0'a bölünce infinity yani sonsuz değerini elde ederiz

    sayıları yazarken başına sıfır koymamalı bunu hexadecimal yada octal sayı tipinde algılayabilir 07 gibi yazılmamalı

    
    sayıları 16 hexadecimal 8'li octal yada 2'li binary taban olarak seçmek için toString() yöntemini kullanabiliriz

    sayılar nesne olabilir

    normalde javascript sayıları değişmezlerden yaratılan ilk değerlerdir ancak rakamlar new anahtar kelimesi ile 
    nesneler olarakta tanımlanabilir

    var x=y.toString(16); y değerini 16 tabanda değiştirdi
    var a=b.toString(8); b değerini 8 tabanına değiştirdi
    var e=f.toString(2); f değerini 2 tabanına değiştirdi



*/

var x=10;
var y=20.4;
var z=12e4; /*çıktısı 120000 12'nin yanına 0000 tane sıfır koyar */
var t=12e-4; /**çıktısı 0.0012 12'yi 10000 ile bölüyor */
var a=0.1;
var b=0.2;
var c=a+b; /* ondalıklı toplama herzaman doğru sonuç vermez o yüzden onluk tabana çevirip sonra tekrar 10 ile böleriz */
var d=(a*10+b*10)/10;

var e='60';
var f=10;
var g=e*f; /*e değeri string olasa bile javascript onu sayısal değer olduğu için number değere dönüştürmeye çalışacaktır */
var h='deneme'

document.getElementById('res1').innerHTML=g;
document.getElementById('res2').innerHTML=isNaN(h); /*false değeri döner çünkü sayıdır sayı olmasaydı true değeri dönecekti */

PrintScreen=()=>
{
    var j =document.getElementById('number').value;
    if(isNaN(j))
    {
        document.getElementById('res3').innerHTML='girilen değer bir sayı değildir';
    }
    else
    {
        document.getElementById('res3').innerHTML='girilen değer bir sayıdır';
    }
}


/*sonsuz olana kadar dönü devam eder sonsuzluğa ulaşınca biter */
Dongu();
function Dongu(){
    var tex1=2;
    var tex2='';

    while(tex1!= Infinity)
    {
        tex1*=tex1;
        tex2+=tex1+"<br>";
    }
    document.getElementById('res4').innerHTML=tex2;
}

var num1,num2,num3,num4;
 num1=128;


 num2=num1.toString(16); /*hxadecimal 16'lık sistem */
 num3=num1.toString(8); /*octal 8'lik sistem */
 num4=num1.toString(2); /*binary 2Lik sistem */

 document.getElementById('res5').innerHTML='16lık sistem: '+num1+"<br>"+'8lik sistem: '+num3+"<br>"+'2lik sistem: '+num4;

 var num5,num6;
 num5=100;
 num6=new Number(200);
 /*false döner çünkü değer olarak eşitler ama tip olarak aynı değiller biri number diğeri object */
 document.getElementById('res6').innerHTML=(num5===num6); 
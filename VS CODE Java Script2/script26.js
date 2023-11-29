

/*debugging VE hoinsting kullanımı */

/*
   
Hata ayıklamada console.log() özellğini kullanabiliriz tarayıcılarda f12 ile console alanına gelince var olan hatayı göstermektedir



*/

var x=5;
debugger; /*debugger gördüğü yede programı durdurur izin verince tekrardan programı yürütür */
document.getElementById('res1').innerHTML=x;

/*hoisting kullanımı */

/*y değişkenini en aşağıda tanımladık java script hata vermez y değişkenini yazdırır yukarıda tanımlanmış gibi davranır 
eğer var y; demeseydik o zaman hata verecekti çünkü böyle bir değişken yokmuş gibi davranacaktı */
var message;
y=7;
message.innerHTML=y;
var y;
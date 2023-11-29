

/*Use Strict kullanımı */

/*

use strict javascript kodunun katı modda yürütüleceğini tanımlar

strict modda bildirilmemiş değişkenleri kullanamazsınız

bir değişkenin,nesnenin veya fonksiyonun silinmesine izin verilmez

bir parametre adının çoğaltılmasına izin verilmez

octal sayısal literallere izin verilmez

Escape (\) karakterine izin verilmez

salt okunur bir özelliğe izin verilemz

eval stringi bir değişken olarak kullanılmaz

arguments stringi bir değişken olarak kullanılmaz

with ifadesine izin verilmez

güvenlik nedeni ile eval() fonksiyonun çağırıldığı kapsamda değişkenler oluşturulmasına izin verilmez

Not = use strict yönergesi yalnızca bir script'in yada bir fonksiyonun başında kabul edilir

strict modu destekleyen tarayıcılar

1. IE verisyon 10

2. Firefox verison 4

3. Chrome versiyon 13

4. Safari v5.1

5. Opera V12



*/

/* en başa use strict yazmasaydık x değişkenini var demeden kullanabilecektik fakat use strict yazdığımız için diyorki x değişkenini tanımla
yoksa hata verdiriyor use strict istedğimiz alanda kullanabiliriz nereye yazdıysak onun altında kalan durumları kontrol eder */

 "use strict";
 var x=5;
document.getElementById('res1').innerHTML=x;

/*aynı parametre değişkenine izin vermez */
Show();
function Show(p1,p1)
{
  
}


var y=070; /*bu şekilde bir yazıma izin vermez */

var z=\70; /* bu şekilde bir yazıma da izin vermez */


/*burda boş bir objext oluşturdum sonra object.defineProperty ile değer ataması yapıyoruz 
writable ile yazılabilirliğini kapattık sadece okunabilir */
var obj={};
Object.defineProperty(obj,'x',{value:5,writable:false});
obj.x=10; /*use strict olmasaydı hata vermeyecekti use strict olduğu için hata veriyor tür hatası okunabilir sadece diyor yazılamaz */


/*use strict eval kullanılmasına izin vermez */
eval('var x=50');
alert(x);


/*math nesnesi kullanımı */

/*
   Math.PI = pi sayısını döndürür

   Math.round() = verilen değeri en yakın değere yuvarlar

   Math.pow() = verilen değerin üssünü alır Math.pow(x.y) x üzeri y değerini döndürür

   Math.sqrt() = verilen değerin karakökünü verir

   Math.abs() = verilen değerin mutlak değerini verir
   
   Math.ceil() = en yakın bir üst tam sayıya çevirir

   Math.floor() = en yakın bir alt sayıya çevirir

   Math.sin() = verilen değerin radyan cinsinden sinüsünü -1 ile 1 arasında bir değer döndürür

   Math.cos() = verilen değerin radyan cinsinden kosünüsünü -1 ile 1 arasında bir değer döndürür

   radyan yerinne açı kullanmak istersek derece olarak radyana çevirmemiz gerekir

   radyan = derece(Math.*PI/180) formülünü kullanırız

   parametreler lsitesinde en büyük ve en düşük değeri bulmak için Math.max() ve Math.min() metotları kullanılır

   Math.random() = rast gele sayı üretmek için kullanılır 0 dahil 1 haric arasında sayı üretir

   
   Math.E = Euler sayısı

   Math.SQRT2 = 2'nin karekökü

   Math.SQRT1_2 = 1/2'nin karakökü

   Math.LN2 = logaritma 2

   Math.LN10 = logaritma 10

   Math.LOG2E = e'nin logaritma 2 tabanındaki değeri

   Math.LOGE10 = e'nin logaritma 10 tabanındaki değeri

   diğer global nesnelerin aksine Math nesnesinin yapıcısı yoktur metotlar ve sabitler statiktir 
   tüm metotlar ve sabitlerden önce bir Math nesnesi oluşturmadan kullanılabilir

*/

document.getElementById('res1').innerHTML=Math.PI; /*pi sayısını verir */

var num1=6.75;
var num2=6.45;
var num3=2;
var num4=3;
var num5=64;
var num6=-50;
var num7=5.3;
var num8=5.9;
document.getElementById('res2').innerHTML=Math.round(num1)+"<br>"
+Math.round(num2); /*7 değerine yuvarlar en yakın 7 değeri olduğu için  diğerini 6 değerine yuvarlar 6'ya daha yakın olduğu için*/
document.getElementById('res3').innerHTML=Math.pow(2,3); /*8 değerini verir 2 üzeri 3 demektir */
document.getElementById('res4').innerHTML=Math.sqrt(num5); /*8 değerini verir karakökünü alır */
document.getElementById('res5').innerHTML=Math.abs(num6); /*mutlak değerini verir 50 değerini verir */
document.getElementById('res6').innerHTML=Math.ceil(num7); /*en yakın üst değere yuvarlar virgülden sonraki değerin önemi yok hep yukarı yuvrlar */
document.getElementById('res7').innerHTML=Math.floor(num8); /*en yakın bir alt değere yuvarlar virgülden sonraki değerin önemi yok hep alt değere yuvarlar */

/*90 radyan cinsinden olduğu için 1 değerini vermedi dereceye çevirmemiz gerek 90*(Math.PI/180)  */
document.getElementById('res8').innerHTML=Math.sin(90*(Math.PI/180));
document.getElementById('res9').innerHTML='en büyük sayı '+Math.max()+"<br>"
+'en küçük sayı '+Math.min();

document.getElementById('res10').innerHTML=Math.random(); /*0 ile 1 arasında bir değer üretir  hariç 0 dahil */

document.getElementById('res11').innerHTML=Math.E;
document.getElementById('res12').innerHTML=Math.SQRT2;
document.getElementById('res13').innerHTML=Math.SQRT1_2;
document.getElementById('res14').innerHTML=Math.LN2;
document.getElementById('res15').innerHTML=Math.LN10;
document.getElementById('res16').innerHTML=Math.LOG2E;
document.getElementById('res17').innerHTML=Math.LOG10E;
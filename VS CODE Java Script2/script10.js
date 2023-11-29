

/*date tarih nesnesi */

/*
   Tarih nesneleri new DATE() constructor ile oluşturulur
   
   Tarih nesneleri new DATE() constructor ile oluşturulur

   1. new DATE() ile

   2. new DATE(miliseconds) ile

   3. new DATE(datestring) ile

   4. new DATE(year,month,day,hours,minutes,seconds,miliseconds) ile

   javascirpt ayları 0'dan 11'e kadar sayar ocak ayı 0.indextir aralık 11.indextir

   bir tarihi toString() metodu ile string ifadeye çevirebiliriz

   toUTCString() = metodu bir tarihi UTC stringine dönüştürür

   toDateString() = metodu bir tarihin dha okunur bir biçime dönüştürülmesini sağlar

   86400000 bir güne tekabul eder mili saniye olarak

   ISO Date "2018-11-15" standardı budur

   Short Date "15/11/2018"

   Long Date "Nov 15 2018 0r 15 Nov 2018"

   Full Date "Saturday November 30 2017"
 
   ISO biçimi javascript'in kullandığı biçimdir diğer biçimler okadar iyi tanımlanmamıştır tarayıcıya özgü olabilir  (YYYY-AA-GG) şeklindedir

   ISO tarihleri saat dakika ve saniye eklenerek yazılabilir (YYYY-MM-DDTHH:MM:SSZ)

   tarih ve saat büyük T ile yazılır UTC saati büyük Z ile yazılır UTC'ye göre zamanı değiştirmek istersek Z'yi kaldırıyoruz ve bunu yerine +HH:MM veya -HH:MM ekleriz

   Not = bir tarih saat stringinde T ve Z yi atlamak farklı tarayıcılarda farklı sonuçlar verebilir

   bir tarih belirlerken saat dilimi belirtilmediğinde javascript tarayıcının saat dilimini kullanılır

   bir tarih elde ederken saat dilimi belirtilmediğinde sonuc tarayıcının saat dilimine dönüştürülür

   bazı tarayıcılarda önünde sıfır olmayan aylar veya günler bir hata üretebilir

*/

var d=new Date(); /* d tarih nesnesi oluşturduk  object tipindedir*/
var dt1=new Date("April 20,2018 15:00:00"); /*kendimizde bir tarih girebiliriz */
var dt2=new Date(86400000); /*mili saniye vererek tarih nesnesi oluşturduk */
var dt3=new Date(90,4,20,13,30,20,0); /*1990 04(mayıs) 20(gün) 13(saat) 30(dakika) 20saniye 0(milisaniye) aylar 0'dan başlar */
var dt4=new Date();
var dt5=new Date();
var dt6=new Date();
var dt7=new Date("2018-11-15T18:30:20Z");
var dt8=new Date("2018-11-15"); /*saat dilimi vermez isek tarayıcı saatini alır */
var dt9=new Date("2020-1-5"); /*ay ve gün değerini başına 0 koymadan yazarsak bazı tarayıcılarda sorun çıkabilir */

/*Sat Sep 09 2023 14:43:41 GMT+0300 (GMT+03:00) GMT boylam ingiltere greenwich saat kulesinden 3 saat ilerideyiz demek boylama göre doğudayız*/
document.getElementById('res1').innerHTML=d; /* Sat Sep 09 2023 15:02:10 GMT+0300 (GMT+03:00) */

document.getElementById('res2').innerHTML=dt1;
document.getElementById('res3').innerHTML=dt2; /*java scriptin oluşturulduğu tarih */
document.getElementById('res4').innerHTML=dt3;
document.getElementById('res5').innerHTML=typeof dt4.toString(); /*tarih tipinden object tipten string değere çevirdik */
document.getElementById('res6').innerHTML=dt5.toUTCString(); /* Sat, 09 Sep 2023 12:02:10 GMT */
document.getElementById('res7').innerHTML=dt6.toDateString(); /* Sat Sep 09 2023 */
document.getElementById('res8').innerHTML=dt7;
document.getElementById('res9').innerHTML=dt8;
document.getElementById('res10').innerHTML=dt9;
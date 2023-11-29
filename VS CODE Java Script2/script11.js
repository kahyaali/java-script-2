

/*date tarih metotları */

/*
   getDate() = günü sayı olarak alır 1 ie 31 arasında

   getDay() = haftanın gününü sayı olarak verir 0 ile 6 arasında 0 pazar gününü temsil eder

   getFullyear() = dört haneli yılı alır

   getMonth() = ayı verir 0 ile 11 arasında

   getHours() = saati verir 0 ile 23 arasında

   getMinutes() = dakiakyı verir 0 ile 59 arasında

   getSeconds() = saniyeyi verir 0 ile 59 arasında

   getMiliseconds() = mili saniyeyi alır 0 ile 999 arasında

   getTime() = zamanı verir(1 ocak 1970'ten itibaren milisaniye olarak)

   setDate() = günü bir sayı olarak ayarlar (1 ile 31 arasında)

   setFullYear() = yılı ayarlar (isteğe bağlı olarak ay ve gün)

   setMonth() = ayı ayarlamak için (0 ile 11 arasında)

   setHurs() = saati ayarlamak için (0 ile 59 arasında)

   setMinutes() = dakikayı ayarlamak için (0 ile 59 arasında)

   setSeconds() = saniyeyi ayarlamak için (0 ile 59 arasında)

   setMiliseconds() = milisaniyeyi ayarlamak için ( 0 ile 999 arasında )

   setTime() = zamanı ayarlamak için ( 1 ocak 1970'den itibaren milisaniye olarak)

   
Date.parse() = şimdiki tarih ile 1 ocak 1970 arasındaki milisaniyenin sayısını döndürür 
daha sonra bir tarih nesnesine dönüştürmek için milisaniye sayısını kullanabilirsiniz

tarihler kolayca karşılaştırılabilir

*/

document.getElementById('res1').innerHTML=new Date().getDate(); /*sayısal olarak ayın gününü verir 1 ile 31 arasında */
document.getElementById('res2').innerHTML=new Date().getDay(); /* sayısal olarak haftanın gününü döner 0 ile 6 arasında */
document.getElementById('res3').innerHTML=new Date().getFullYear(); /*4 haneli olarak yıl bilgisini verir */
document.getElementById('res4').innerHTML=new Date().getMonth(); /*ay bilgisini verir 0 ile 11 arasında */
document.getElementById('res5').innerHTML=new Date().getHours(); /*saat bilgisini verir 0 ile 23 arasında */
document.getElementById('res6').innerHTML=new Date().getMinutes(); /*dakika bilgisini verir 0 ile 59 arasında */
document.getElementById('res7').innerHTML=new Date().getSeconds(); /*saniye bilgisini verir 0 ile 59 arasında */
document.getElementById('res8').innerHTML=new Date().getMilliseconds(); /*mili saniye bilgisini verir 0 ile 999 arasında */
document.getElementById('res9').innerHTML=new Date().getTime(); /*mili saniye olarak zamanı verir 1 ocak 1970'den bu yana */

var days=["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]

document.getElementById('res10').innerHTML=(days[new Date().getDay()]);

var d=new Date();
d.setDate("20"); /*ayın gününü değiştirir */
d.setHours("15"); /*saati değiştirir */
d.setMinutes("30"); /*dakikayı değiştirir */
d.setSeconds("25"); /*saniyeyi değiştirir */
d.setFullYear("2000"); /*yılı değiştirir */
document.getElementById('res11').innerHTML=d;

var ms=Date.parse("April 21 1970"); /**mili saniye olarak bize verir */
var dt=new Date(ms);
document.getElementById('res12').innerHTML=ms;
document.getElementById('res13').innerHTML=dt; /*april 21 1970 tarihini verir */
document.getElementById('res14').innerHTML=dt.getUTCDate();
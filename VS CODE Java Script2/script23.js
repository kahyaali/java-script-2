

/*birwese bir düzeyinde işlemler */

/*
   & = bitsel olarak and operatörü

   | = bitsel olarak veya operatörü

   ^ = bitsel olarak XOR iki bitten biri 1 diğeri 0 olduğunda sonuç 1 olur

   ~ = bitsel olarak NOT anlamına gelir tüm bileri tersine çevirir

   << = sıfırları soldan iterek sağa kayar ve en soldaki bitlerin düşmesine izin verir

   >> = en soldaki bitlerin kopyalarını iterek sağa kayar  ve en sağdaki bitlerin düşmesine izin verir

   >>> = soldan sıfırlara basarak sağa kayar ve en sağdaki bitlerin düşmesine izin verir
 
   javascript 32 bitlik bitwise işaretlerini kullanıyor

   javascript sayıları 64 bit kayan nokta sayıları olarak saklar, ancak bitwise işlemleri 32 bitlik ikili sayılarda gerçekleştirilir

   bitwise işlem gerçekleştirilmeden önce javascript, sayıları 32 bitlik tam sayılara dönüştürür

   bir tam sayı en sondaki biti eksi işareti olarak kullanır 0 pozitif demek 1 negatif demektir


*/

/* & ve operatörü */
document.getElementById('res1').innerHTML=0&0; /*sonuc 0 */
document.getElementById('res2').innerHTML=0&1; /*snuc 0 */
document.getElementById('res3').innerHTML=1&0; /*sonuc 0 */
document.getElementById('res4').innerHTML=1&1; /*sonuc 1 */

/* | veya operatörü */
document.getElementById('res5').innerHTML=0|0; /*sonuc 0 */
document.getElementById('res6').innerHTML=0|1; /*snuc 1 */
document.getElementById('res7').innerHTML=1|0; /*sonuc 1 */
document.getElementById('res8').innerHTML=1|1; /*sonuc 1 */

/* ^ XOR operatörü */
document.getElementById('res9').innerHTML=0^0; /*sonuc 0 */
document.getElementById('res10').innerHTML=0^1; /*snuc 1 */
document.getElementById('res11').innerHTML=1^0; /*sonuc 1 */
document.getElementById('res12').innerHTML=1^1; /*sonuc 0 */



/* 0000 0000 0000 0000 0000 0000 0101 =5 bir bit sola kaydırdık
   0000 0000 0000 0000 0000 0000 1010=10 eder 


*/
document.getElementById('res13').innerHTML=5<<1; /*sonuc 10 döner */



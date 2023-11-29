
/*arrays diziler kullanımı */


/*
   array dizideki ilk index 0'dan başlar

   arraylar nesnelerin özel bir türüdür typeof operatörü arraylar için object döner

   arraylarda öğrelere erişmek için sayıları kullanırız

   nesnelerde öğelere erişmek için isimleri kullanılır

   arrayda farklı türde değişkenlere sahip olabilir

   arrayda nesnelere sahip olabiliriz

   arrayda fonksiyonlara sahip olabiliriz

   arrayda arraylara sahip olabiliriz

   Arrayın length özelliği arrayın öğelerinin sayısını verir

   Arraya yeni bir eleman eklemenin yolu push metodunu kullanmaktır

   Arraya yeni bir eleman eklemek için length özelliğide kullanılabilir

   Arraylar numaralı dizinleri kullanır (nesne ve array arasındaki fark)

   Nesneler isimlendirilmiş dizinleri kullanır (array ve nesneler arasındaki fark)


*/

var langs=['php','asp.net','javascript','jquery','c sharp','java','python','angular js','react js','node js']; /*diziyi tanımladık index 0'dan başlar */

var obj={first:'deneme1', last:'deneme2',fullname:'deneme1 deneme2'}; /*object tanımladık */

document.getElementById('res1').innerHTML=langs; /*arrayın adını ayzarak tüm öğelerine erişebiliriz */
document.getElementById('res2').innerHTML=typeof langs; /*object döner geriye */
document.getElementById('res3').innerHTML=langs[4]; /*arrayın öğelerine index numarası ile erişilir */
document.getElementById('res4').innerHTML=obj.first; /*nesnelerde öğelere isim olarak erişilir */
document.getElementById('res5').innerHTML=obj["first"]; /*nesnelerde öğelere erişmenin diğer yolu */
document.getElementById('res6').innerHTML=langs.length; /*10 değerini döner çünkü dizide 10 eleman var */

// var text,i;
// text="<ul>";
// for(i=0;langs.length;i++)
// {
//     text+="<li>"+langs[i]+"</li>";
// }
// text+="</ul>";

document.getElementById('res7').innerHTML=text;

function Add1()
{
    langs.push('bootstrap4');
    document.getElementById('res8').innerHTML=langs; /*bunu fonskiyon dışına alınca eklenen değeri göstermiyor */
}

function Add2()
{
    langs[langs.length]='bootstrap5' /*bunda niye ekler index<length olduğu için index 9 iken length 10'dur  */
    document.getElementById('res8').innerHTML=langs; /*bunu fonskiyon dışına alınca eklenen değeri göstermiyor */
}







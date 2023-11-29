

/*array özellik ve metotları */

/*
   var arr1=new Array(); şeklinde dizi oluşturmaya gerek yok var arr1=[]; şeklinde dizi oluşturabiliriz kısa yoldan
   
   bir değişkenin array olup olmadığını anlamak için ECMAScript 5 yeni bir Array.isArray() metodu tanımlamaktadır bu çözümle ilgili sorun eski tarayıcıların ECMAScript 5'i desteklememesidir

   bu sorunu çözmek için kendi isArray() fonksiyonumuzu oluşturmamız gerekmektedir böylece nesne protoripi Array kelimesini içeriyorsa true değerini döndürür
   
   Inctanceof ile array olup olmadığını kontol edebiliriz arr1 Inctanceof Array array ise true değil ise false döner

   toString() = bir arrayi virgülle ayrılmış array değerlerine dönüştürür

   join() = tüm array öğelerini bir arraya katar toString gibi davranır buna ek olarak ayırıcı işaretini belirtebilirsiniz

   pop() = bir arraydan son öğreyi kaldırmaya çıkarmaya yarar çıkarılan değeri geri döner
 
   push() = bir arraya yeni bir eleman eklemek için kullanılır array'in sonuna ekler yeni array uzunluğunu döndürür

   shift() = ilk array elemanını çıkarır ve diğer tüm öğeleri sola kaydırır
   
   unshift() = bir arraya eleman eklemek için kullanılır array'ın başına ekler yeni elemanı ve diğer öğeler sağa doğru kayar yeni array uzunluğunu verir

   Not = delete kullanmak arrayda tanımlanmamış boşluklar bırakabilir onun yerine pop() ve shift() metotları kullanılmalıdır

   splice() = bir arraya yeni öğeler eklemek için splice() metodu kullanılabilir akıllı parametre ayarı ile arrayda 
   boşlukları bırakmadan elemanları kaldırmak için splice() metodunu kullanabiliriz splice() metodu silinen elemanları dizi olarak döner

   concat() = var olan araylari birleştirerek yeni bir array oluşturur var olan array'leri değiştirmez yeni bir array döndürür

   slice() = slice() metodu bir arrayi yeni bir arraya ayırır dilimleme yapar slice() metodu yeni bir array döndürür kaynak arrayda herhangi ir öğeyi kaldırmaz slice(par1,par2) şeklinde 2 parametre alabilir
   ilk parametreden son parametreye kadar olan elemanları seçer son parametre dahil değildir.
   parametre olarak tek değer yazarsak verilen indexte dahil ve sonrasını yeni dizi olarak döner eğer iki parametre verirsek
   ilk parametre dahil ikinci paramtreye kadar olan elemanları dizi olarak döner ikinci parametre dahil değil

*/

arr1=['php','asp.net','javascript','node js','c sharp'];

arr1[5]='ajax'; /*bu şekilde de array'a ekleme yapabilirim index numarasını vererek*/

document.getElementById('res1').innerHTML=arr1;

// var text,i;
// text="";

// for( i=0;arr1.length;i++)
// {
//     text+=arr1[i]+"<br>";
// }
// document.getElementById('res2').innerHTML=text;

document.getElementById('res3').innerHTML=Array.isArray(arr1); /*array ise true değerini döner array değil ise false değerini döner */

document.getElementById('res4').innerHTML=arr1 instanceof Array; /*array ise true değil ise false değerini döner */


/*kendi isArray fonksiyonumuzu oluşturacağız*/
function isArray(_arr)
{
    /*true yada false değerini döner indexof değeri bulamaz ise -1 döner bulursa index numarasını döner*/
    return _arr.constructor.toString().indexOf("Array")>-1; 
}

document.getElementById('res5').innerHTML=isArray(arr1);

document.getElementById('res6').innerHTML=arr1.join("-"); /**array elemanlarını verilen ayrac'a göre ayırarak verir */

document.getElementById('res7').innerHTML=arr1.pop(); /*diziden son elemanı çıkarır ve çıkardiği elemanı geri döndürür*/

document.getElementById('res8').innerHTML=arr1.push('pyhtoon'); /*diziye yeni eleman eklemek için kullanılır dizinin sonuna ekler yeni elemanı */

document.getElementById('res9').innerHTML=arr1.shift(); /*dizinin ilk elemanını çıkarır diğer öğeler sola kayar */

document.getElementById('res10').innerHTML=arr1.unshift('C++'); /*eklenen elemanı dizinin başına ekler diğer öğeler sağa kayar */

arr1[2]='MVC5'; /*2. indexteki elemanı bu şekilde değiştirebilirim */

delete arr1[3]; /*delete ile silme yapınca elemanın yeri boş kalabilir tasvip edilmez bunun yerine pop() yada shift() kullanılmalı */


/*3.index'ten itibaren yeni elemanı ekler jquery elemanını ekle diyoruz 0 ise değiştirilcek eleman var mı hayır o yüzden  0 yazdık  */
arr1.splice(3,0,'jquery'); 

/*0. indexten itibaren 2 elemanı çıkar demek splice() metodu ile ekleme ve çıkarma yapabiliriz 0 ve 1. indexleri çıkarır*/
arr1.splice(0,2);

/*3.indexten itibaren 7 elemanı çıkarır 3. indexte dahil*/
arr1.splice(3,7);


/*3.index'e yeni değeri ekler sonra gelen iki elemanı siler */
arr1.splice(3,2,'Yeni Değer');

var arr2=[1,2,3];
var arr3=[4,5,6,7,8,9,10];

document.getElementById('res11').innerHTML=arr2.concat(arr3); /*arr2 ile arr3 dizilerini birbirine bağladı geriye yeni bir dizi döner*/

document.getElementById('res12').innerHTML=arr2.concat(...arr3); /*bu şekilde de bağlayabiliriz */

document.getElementById('res13').innerHTML=arr3.slice(2); /*2.dex dahil geri kalan değerleri alarak yeni bir dizi döner */

document.getElementById('res14').innerHTML=arr3.slice(0,3); /*0.indexten başlar 3.index'e kadar olan elemanları alır çıktısı 4,5,6 olur */

document.getElementById('res15').innerHTML=arr3.slice(1,3); /*1.index'ten başlar 3.index'e kadar olan elemanları alır çıktısı 5,6 olur */

document.getElementById('res16').innerHTML=arr3.slice(3,5); /*3.indexten başlar 5.index'e kadar olan verileri getirir çıktısı 7,8 olur */
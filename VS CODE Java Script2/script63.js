

/* set map weakmap nesnelerinin kullanımı */

/*

<----------------- Set ------------------------>
set = benzersiz değerleri saklar
add =  set nesnesine ekleme yapmak için kullanılır

delete = set nesnesinden eleman silmek için kullanılır

clear() = set nesnesini tamamen temizlemek için kullanılır

has = verilen eleman set nesnesi içinde var mı yok mu kontrolünü sağlar var ise true yok ise false döner

size = set nesnesinin eleman sayısını verir

<----------------------- Map ---------------------->

map = değerleri key value mantığı ile tutmaktadır

set =  map'e eleman eklemek için kullanılır

has = aranan değerin var olup olmadığına bakar var ise true yok ise false döner aramayı key değeri ile yapıyoruz value değeri ile yapmıyoruz

get = get ile key değerini yazarak value değerini elde ederiz

delete = delete ile key değeri verilen elemanı sileriz

clear() = tüm map içeriğini temizler

size = map içerisindeki eleman sayısını verir

<------------------ WeakMap ----------------------->

WeakMap = key value mantığı ile veri saklaması yapar

set = weakmap içerisine değer atamamk için kullanılır

size = weakmap içerisindeki eleman sayısını veriri

has = aranan değerin var olup olmadığına bakar var ise true yok ise false döner

delete = verilen key değerine göre var olan veriyi siler

clear() = tüm weakmap içeriğini temizler

*/

var r1=document.querySelector('#result1');
var r2=document.querySelector('#result2');
var r3=document.querySelector('#result3');
var r4=document.querySelector('#result4');
var r5=document.querySelector('#result5');

/* Set Kullanımı */

/* new diyerek bir set nesnesi oluşturduk */
let dataSet=new Set();

/* add komutu ile ekleme yapıyoruz */
dataSet.add('javascript');
dataSet.add('angular js');
dataSet.add('react js');

/* has ile içinde eleman var mı yok mu onu kontrol ediyoruz var ise true döner yok ise false döner*/
r1.innerHTML=dataSet.has('javascript');

/* size bize kaç elemanı olduğunu verir */
r2.innerHTML=dataSet.size;

/* silme işlemini delete ile yapıyoruz */
dataSet.delete('react js'); 
r2.innerHTML=dataSet.size+"<br>";

/* tamamını temizlemek için clear ifadesini kullanırız */
//dataSet.clear();


/* set içerisindeki veriler ulaşıyoruz bu veriler benzersiz olmak zorundadır */
for(let x of dataSet)
{
    r2.innerHTML+=x+"<br>";
}

/* set nesnesini array'a çevirerek içerisindeki değerlere ulaşabiliriz */
let arr1=Array.from(dataSet);
r3.innerHTML=arr1[0]+' '+arr1[1];


/* Map Kullanımı */

/* map nesnesini oluşturduk */
var m=new Map();

m.set('1','javascript');
m.set('2','node js');
m.set('3','react js');

r4.innerHTML=m.has('1'); /* has ile arama yaparken key değeri ile yapıyoruz value değeri ile yapmıyoruz */

r4.innerHTML=m.get('1'); /* key değerini yazarak value değerini elde ederiz */

//m.delete('2'); /* delete ile key değeri verilen elemanı sileriz */

//m.clear(); /* tüm map içeriğini temizler */

r4.innerHTML=m.size; /* map içerisindeki eleman sayısını verir */

console.log(m.keys());
console.log(m.values());


/* WeakMap Kullanımı */

let wm=new WeakMap();

wm.set(1,'javascript');
wm.set(2,'c sharp'),
wm.set(3,'node js');

wm.size();

wm.has(1); /* aranan değer var ise true yok ise false döner */

wm.delete(1); /* verilen key değerli veriyi siler */

wm.clear(); /* tüm weakmap içeriğini temizler */


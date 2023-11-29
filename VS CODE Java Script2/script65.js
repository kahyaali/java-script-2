

/* ecmascript6 ile gelen number ve string metotları */

/*
 repeat() = verilen ifadenin verilen değer kadar tekrar etmesini sağlar

 startsWWith() = aranan kelimenin cümle içinde geçip geçmediğini kontrol eder geçiyor ise true geçimiyor ise false döner index numaras 
 vererek istediğimiz index'ten itibaren arama yaptırabiliriz

 endsWith() = verilen ifadeyi cümle sonunda arar aranan ifade var ise true yok ise false döner

 includes() = verilen değeri cümle içinde arar geçiyor ise true geçmiyor ise false döner cümle verilen değeri içeriyormu
 içermiyormu onun kontrolünü yapar index numarası vererek verilen index'ten itibarende arama yapılabilir

 isFinite() = verilen değerin sayı olup olmadığını kontrol eder sayı ise true değil ise false döner

 isNaN() = verilen ifade sayı değil ise true döner sayı ise false döner

 isInteger() = verilen değerin tam sayı olup olmadığını kontrol eder eğer tam sayı ise true değil ise false döner

 isSafeInteger() = verilen değerin güvenli bir tam sayı olup olmadığını kontrol eder true veya false değeri döner

 EPSILON = matematikteki epsilon sayısını döndürür

 MAX_SAFE_INTEGER = max en büyük tam sayıyı verir

 MIN_SAFE_INTEGER = min en küçük tam sayıyı verir




*/

var r1=document.querySelector('#result1');


let text='javascript ecmascript 6 ile gelen yeni string metotları javascript ecmascript 6 ile nesne yönelimli programlamaya adım atmış oldu artık'+
'class inheritance javascriptte mümkün';

let txt='javascript';
 
/* String Metotları */


r1.innerHTML=txt.repeat(4); /* verilen değer kadar tekrar etmesini sağlar */

/* verilen ifadenin cümle başında geçip geçmediğini verir geçiyor ise true geçmiyor ise false döner */
r1.innerHTML=txt.startsWith('javascript')? 'aranan kelime var':'aranan kelime yok';

/*  index numarası vererek istediğimiz index'ten sonrada arama yaptırabiliriz 10. index'ten itibaren kontrol etmesini bildiriyoruz */
r1.innerHTML=txt.startsWith('javascript',10)? 'aranan kelime var':'aranan kelime yok';

/* verilen ifadeyi cümlenin sonunda arar var ise true yok ise false değerini döner */
r1.innerHTML=txt.endsWith('javascript')?'aranan kelime var' : 'aranan kelime yok';

/* verilen ifadenin cümle içinde geçip geçmediğini kontrol eder geçiyor ise true geçmiyor ise false döner index numarası vermek mecbur
değil verilen index'ten itibaren arama yapar */
r1.innerHTML=text.includes('gelen',50)? ' aranan kelime mevcut' : 'aranan kelime mevcut değil';

/* Number Metotları */

/* verilen değerin sayı olup olmadığını kontrol eder sayı ise true değil ise false döner */
r1.innerHTML=Number.isFinite(7)? 'verilen değer sayıdır' : 'verilen değer sayı değildir'

/* verilen değer sayı değil ise true sayı ise false döner */
r1.innerHTML=isNaN("de")? 'sayı değildir' : 'sayıdır';

/* verilen değerin tam sayı olup olmadığını kontrol eder tam sayı ise true değil ise false döner */
r1.innerHTML=Number.isInteger('7')? 'tamsayı' : 'tam sayı değil';

/* sayının güvenli bir tam sayı olup olmadığına bakar true veya false değer döner bazı aritmatik işlemlerde basamak değerleri
virgüllü olabiliyor */
r1.innerHTML=Number.isSafeInteger(10)? 'güvenli tam sayı' : 'güvenli tam sayı değil';

r1.innerHTML=Number.EPSILON;

r1.innerHTML=Number.MAX_SAFE_INTEGER;

r1.innerHTML=Number.MIN_SAFE_INTEGER;


/*Regular Expressions düzenli ifadeler */

/*
Arama deseni metin arama ve metin değiştirme için kullanılabilir düzenli bir ifade tek bir karakter veya daha karmaşık bir desen olabilir

Düzenli ifadeler her türlü metin arama ve metin değiştirme işlemlerini gerçekleştirmek için kullanılabilir

java scripte regular exprensions iki string metodu ile sıklıkla kullanılablir

1. search()

2. replace()

/i = büyük küçük harf duyarlılığı olmayan eşleşme başlatır

/g = belirtilen metnin tamamında arama yapılacağını belirtir

/m = birden fazla satırdan oluşan metinlerde arama yapmak için kullanılır

\d = bir rakam bul

\s = boşluk karakteri bulun

\uxxxx = onaltılık sayı xxxx ile belirtilen unicode karakterini bulun

n+ = en az bir n içeren herhangi bir string ile eşleşir

n* = sıfır veya daha fazla sayıda n içeren herhangi bir string ile eşleşir

n? = sıfırları beya birlez n'yi içeren herhangi bir string ile eşleşir

test() = test() metodu verilen ifadeyi parametre olarak verilen ifade içinde arar var ise true yok ise false döner
/den/.test(text)  text içinde den ifadesi var ise true yok ise false döner

exec() = belirtilen bir dsen için bir dize arar ve bulunan metni döndürür hiçbir eşleşme bulamaz ise null döner

*/

var text='deneme deneme deneeeme Deneme \n denneme denemmeeee @'; /*\n bir alt satıra inmeyi sağlar */

document.getElementById('res1').innerHTML=text.search(/@/); /*bulursa index numarasını bulamaz ise -1 değerini döner */

document.getElementById('res2').innerHTML=text.search('@'); /*bulursa index numarasını bulamaz ise -1 değerini döner */

/*bulursa index numarasını bulamaz ise -1 değerini döner büyük küçük harf duyarlıdır*/
document.getElementById('res3').innerHTML=text.search(/Deneme/); 

/*bulursa index numarasını bulamaz ise -1 değerini döner büyük küçük harf duyarlılığını iptal etmek için /i ifadesini kullanırız */
document.getElementById('res4').innerHTML=text.search(/Deneme/i); 

/* /g dediğimizde aramayı tüm metinde sağlayacaktı hem büyk küçük harf duyarlığına bakmayacak ve tüm metinda arama yapacak  */
document.getElementById('res5').innerHTML=text.search(/Deneme/ig); 

/* /m birden fazla satır var ise diğer satırlarda da arama yapılmasını sağlar */
document.getElementById('res6').innerHTML=text.search(/Deneme/igm); 


/*test metodu ile den içeren ifade avr mı onu kontrol eder var ise true değer döner yok ise false döner*/
document.getElementById('res7').innerHTML=/dene/.test(text); 

/*verilen ifade parametre olarak girilen ifade içinde aranır var ise geriye aranan ifade döner yok ise null döner */
document.getElementById('res9').innerHTML=/den/.exec(text);

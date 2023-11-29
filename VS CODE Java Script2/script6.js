

/*string metodları */

/*
length = stringin uzunluğunu verir

indexOf() = bir stringde aranan ifadenin ilk bulunduğu yerin ilk konumunu index numarasını döndürür eğer değeri bulamaz ise -1 döner verilen indexten itibaren arama yap diyebiliriz

lastIndexOf() = bir stringde belirtilen ifadenin son bulunduğu yerin konumunu index numarasını döndürür bulamaz ise -1 değerini döner verilen indexten itibaren arama yap diyebilirz

search = bir stringde belirtilen ifadenin ilk bulunuduğu yerin konumunu index numarasını döndürür bunda verilen indexten itibaren arama yap diyemeyiz bulamaz ise -1 döner

stringleri bölümlere ayırmak için 3 adet metot kullanılır

1. slice(start,end)

2. substring(sart,end)

3. substr(start,length)

1. slice(start,end) = bir stringden bir bölümü çıkarır ve ayıklanan bölümü ile yeni bir string döndrür bu metot iki parametre alır başlangıç ve bitiş konumu

bir parametre negatif ise konum stringin sonundan sayılır

ikinci parametreyi atlarsak metot stringin geri kalanını dilimleyecektir

negatif konumlar internet explorer 8 ve önceki sürümlerinde çalışmaz

2. substiring(start,end) = slice() ile kullanımı aynıdır fark substring negatif indexleri kabul etmiyor

ikinci parametreyi atlarsak substring dizinin geri kalanını dilimleyecektir

3. sunstr(start,length) = slice() ile benzerdir aradaki fark ikinci parametrenin çıkarılan parçanın uzunluğunu belirtiyor olmasıdır

ilk parametre negatif ise konum dizinin sonundan sayar

ikinci parametre negatif olamaz çünkü uzunluğu tanımlar

ikinci parametreyi atlar isek dizinin geri kalanını dilimliyecektir

replace() = replace() metodu belirtilen değerin bir stringdeki başka bir değerle değiştirilmesini sağlar

çağrıldığı stringi değiştirmez yeni bir string döndürür

default olarak replace() metodu yalnızca ilk eşleşmeyi değiştirir

defaul olarak replace() metodu büyük küçük harf duyarlıdır

replace() metodu büyük harf küçük harf uyumunu dikkate alma demek için replace(/deneme/i,'yeni deneme') 
bu şekilde yazarsak deneme yazısı büyük veya küçük olayına bakmaz değiştirir

replace() metodunda verilen tüm uyan değerleri değiştirmesini ister isek replace(/deneme/g,'denem') şeklinde yazıyoruz

replace() metodunda verilen tüm uyan değerleri değiştirmesini ister isek 
ve büyük küçük harf kontrolü yapmasın istersek replace(/deneme/gi,'denem') şeklinde yazıyoruz

toUpperase() = metnin tamamını büyük harfe çevirir

toLowerCase() = metnin tamamını küçük harfe çevirir

concat() = iki veya daha fazla metni birleştirir

Not = tüm string türleri yeni bir string döndürür mevcut stringi değiştirmezler

string karakterlerini ayıklamak için 2 güvenli metot vardır

1. charAt()

2. charCodeAt()

1. charAt() = bir stringdeki belirli bir index değerini döndürür

2. charCodeAt() = bir strindeki karakterin unicodunu döndürür

split() = split() metodu ile string ifadeler parçalara ayrılarak diziye dönüştürülebilir
*/


PrintScreen();

function PrintScreen()
{
    var text='javascript angular js,react js, node js';
     document.getElementById('res1').innerHTML=text.length;
     document.getElementById('res1').innerHTML=text.indexOf('js'); /*ilk bulduğu index değerini döner bulamaz ise -1 döner */
     document.getElementById('res1').innerHTML=text.lastIndexOf('js'); /*son bulduğu index değerini döner bulamaz ise -1 döner */
     document.getElementById('res1').innerHTML=text.indexOf('js',20) /*20. indexten sonraki indexteki js'yi bul demek */
     document.getElementById('res1').innerHTML=text.search('js'); /*ilk bulduğu index numarasını döner */
}

// PrintScreen = ()=>
// {
//     var text='javascript angular js,react js, node js';
//     return text.length;
// }

BolSlice();
function BolSlice()
{
    var text='deneme yazısı yazıyoruzz';
    document.getElementById('res2').innerHTML=text.slice(6,13); /*çıktı yazısı olarak gelir */
    document.getElementById('res3').innerHTML=text.slice(-10,-1); /* eksi değer alınca sondan başlar çıktı yazıyoruz olarak gelir */
}

BolSubstring();
function BolSubstring()
{
    var text='bölme işlemi yapacağız';
    document.getElementById('res4').innerHTML=text.substring(5,12); /*çıktısı işlemi olur */
    document.getElementById('res5').innerHTML=text.substring(5); /*çıktısı işlemi yapacağız olur */
}

BolSubstr();
function BolSubstr()
{
    /*büyük b'sine kadar kesiyoruz kestiği yerden itibaren ikinci parametre saymaya başlar
     büyük ifadesinin ilk üç elemanını al demek büy olarak çıktısı olur */
    var text='istanbul büyük bir şehirdir';
    document.getElementById('res6').innerHTML=text.substr(9,3); 
    /*sondan -9 diyerek sondan -9 index içeri girer kestiği yerden ikinci parametre kadar sayarak diğer verilen uzunluk kadar ifadeyi alır */
    document.getElementById('res7').innerHTML=text.substr(-9,9);
}

rReplace();
function rReplace()
{
    /*ilk deneme yazısını yeni deneme ile değiştirdi tüm denemeleri değil ilk bulduğunu değiştirir */
    var text='Deneme yazısında deneme deneme deneme olanı değiştireceğiz';
    var text1='Deneme yazısındaki DenemE DEneme DeNeme olanı değiştireceğiz'
    var text3='büyük harfe döndürülecek';
    var text4='KÜÇÜK HARFE DÖNDÜRÜLECEK';
    document.getElementById('res8').innerHTML=text.replace('deneme','yeni deneme');
    document.getElementById('res9').innerHTML=text.replace(/deneme/i,'DENEME'); /* /deneme/i yazarsak büyük küçük harf kontrolü yapmaz */
    document.getElementById('res10').innerHTML=text; /*replace() orjinal metni bozmadan yeni string ile geri döner */

    /*/denem/g yazarsak ne kadar deneme var ise verilen değer ile değiştirir */
    document.getElementById('res11').innerHTML=text.replace(/deneme/g,'example');
    /*/deneme/gi diyerek büyük küçük harf kontrolü yapma ve deneme olan hepsini değiştir dedik */
    document.getElementById('res12').innerHTML=text1.replace(/deneme/gi,'örnek');
    document.getElementById('res13').innerHTML=text3.toUpperCase(); /*büyük harfe çevirir */
    document.getElementById('res14').innerHTML=text4.toLowerCase();/*küçük harfe çevirir */
}

cConcat();
function cConcat()
{
    var text1='deneme1';
    var text2='deneme2';
    var text3='arama yapacağız javascrit csharp';
    document.getElementById('res15').innerHTML=text1.concat(" ",text2); /*iki text ifadeyi birleştirir */
    document.getElementById('res16').innerHTML=text1+" "+text2; /*bu şekilde de iki tex ifadesini birleştirebiliriz */
    document.getElementById('res17').innerHTML=text3.charAt(10); /*index numarasını yazarız bize o indexteki karakteri döner */
    document.getElementById('res18').innerHTML=text3.charCodeAt(0); /*verilen indexteki karakterin unicode değerini verir */
}


ArSplit();
function ArSplit()
{
    var text='deneme1,deneme2,deneme3,deneme4,deneme5';

    var arrayList=text.split(','); /*virgülden sonra parçalara ayır diyoruz dizi halinde geri döner*/
    document.getElementById('res19').innerHTML=arrayList[0];
    document.getElementById('res20').innerHTML=arrayList[1];
    document.getElementById('res21').innerHTML=arrayList[2];
    document.getElementById('res22').innerHTML=arrayList[3];
}



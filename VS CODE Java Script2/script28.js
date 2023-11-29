

/*java script önemlki uyarılar */

/*

global değişkelerden kaçının new anahtar kelimesinden kaçının == ifadesinden kaçının eval() fonksiyonundan kaçının

global değişken kullanımını en aza indirin 

buna tüm veri türleri,nesneler fonksiyonlar dahildir

global değişkenler ve fonksiyonlar diğer komut dosyalarının üzerine yazılabilir

bir fonksiyonda kullanılan tüm değişkenler yerel değişken olarak bildirilmelidir

yerel değişkenler var anahtar kelimesi ile bildirilmelidir

tüm bildirimleri her bir komut dosyasının veya fonksiyonun en üstüne koymak iyi bir kodlama uygulamasıdır

onları ilan ettiğinizde değişkenleri başlatmak iyi bir kodlama uygulamasıdır

her zaman sayıları,stringleri veya booleanları ilkel değerler olarak kullanın nesne olarak değil bu tür nesneleri nesne olarak bildirmek yürütme hızını yavaşlatır ve kötü yan etkiler üretir



*/


/* x değişkenini fonksiyon dışında değil fonksiyon içinde tanımla diyor global olmasın fonksiyon içinde değişken tanımlarken var ifadesini 
kullanmaz isek bunu global değişken olarak algılar */
function show()
{
    var x; 
    return x*x;
}
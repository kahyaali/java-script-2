

/* Window nesnesi'nin kullanımı */

/*
   
tarayıcı nesnesi modeli (BOM) javascriptin tarayıcı ile konuşmasına izin verir

Tarayıcı nesne modeli (BOM) için resmi standartlar yoktur

Window Object = window nesnesi tüm tarayıcılar tarafından desteklenir tarayıcının penceresini temsil eder

Tüm genel javascript nesneleri,fonksiyonları ve değişkeleri otomatik olarak pencere nesnesinin üyesi olur

Global değişkenler window nesnesinin özellikleridir

Global fonksiyonlar ise window nesnesinin metotlarıdır

(HTML DOM'nun) belge nesnesi bile window nesnesinin bir özelliğidir

window size = tarayıcı penceresinin boyutunu belirlemek için kullanılır her iki özellik pixel cinsinden boyutları döndürür

window.innerHeight = tarayıcı penceresinin iç yüksekliği pixel cinsinden

window.innerWidth = tarayıcı penceresinin iç genişliği pixel cinsinden

Not = tarayıcı penceresine (tarayıcı görüntüsü)  araç çubukları ve kaydırma çubukları dahil değildir

window.open() = yeni bir pencere açar

window.close() = pencereyi kapatır

window.moveTo() = pencereyi taşır

window.resizeTo() = pencereyi yeniden boyutlandırır

window.screen nesnesi kullanıcının ekranı ile ilgili bilgileri içerir

window.screen nesnesi window öneki olmadan yazılabilir

screen.width = ekran genişliğini verir

screen.height = ekran yüksekliğini verir

screen.availWidth = mevcut ekran genişliğin verir

screen.availHeight = mevcut ekran yüksekliğini verir kaydırma ve araç çubukları hariç

screen.colorDepth = bir rengi görüntülemek için kullanılan bit sayısını verir

screen.pixelDepth = ekranın pixel yoğunluğunu döndürür

Not = modern bilgisayarlarda renk derinliği ve pixel derinliği eşittir

window.location.href = geçerli sayfanın url bilgisini döndürür

window.location.hostname =web barındırıcının alan adını döndürür

window.location.pathname = gerçerli sayfanın yolunu ve dosya adını döndürür

window.location.protocol = kullanılan web protokolünü döndürür http https gibi

window.location.assign = yeni bir belge yükler

window.location.port = sayfanın portunu döndürür

window.history = tarayıcı geçmişini içerir

history.back() = tarayıcıda geri tıklama ile aynı geçmişteki bir önceki url bilgisini yükler

history.forward() = tarayıcıda ileri tıklama ile aynı geçmiş listedeki bir sonraki url bilgisini yükler

window.navigator = window navigator ziyaretçinin tarayıcısı hakkında bilgi içerir window navigator nesnesi window ön eki almadan yazılabilir

navigator.appName = tarayıcının uygulama adını döndürür

navigator.appCodeName = tarayıcı adını döner chrome firefox gibi

navigator.platform = tarayıcı platformunun işletim sistemini döndürür

Not = çerezler etkin ise cookieEnabled özelliği true değerini aksi halde false değerini döndürür

navigator.appversion = tarayıcı versiyonunu verir

navigator.language = tarayıcı dilini döndürür

navigayor.onLine = internete bağlı olup olmadığının bilgisini verir bağlı ise true değil ise false döner

navigator.javaEnabled() = java yüklü ise true değil ise false döner


*/



/*başında gizli bir window ifadesi bulunmaktadır */
window.document.getElementById('res1').innerHTML='window nesnesidir';

var w,h;

w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; /*tarayıcı genişliğini verir */
h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; /*tarayıcı yüksekliğini verir */
document.getElementById('res2').innerHTML='tarayıcı genişiği: '+w+'<br> tarayıcı yüksekliği: '+h;


var newWindow;
function openWindow()
{
    newWindow=window.open("https://www.google.com","YeniPencere","width=600,height=400");
    /*sayfa yönlendirmesi yapıyorsak document.write ile yazı yazmamamız gerek yoksa yönlendirme yapmıyor */
    newWindow.document.write('Bu pencere javascript tarafından açıldı'); /*açılan sayfaya yazı yazdık */
}

function closeWindow()
{
   newWindow.close(); /*açık olan pencereyi kapatır */
}

function resizeWindow()
{
  newWindow.resizeTo(1000,800); /*verilen değerlerde açık olan pencereyi günceller */
}

function moveToWindow()
{
  newWindow.moveTo(450,150);
}

function Load()
{
    window.location.assign("https://www.google.com"); /*verilen url adresini açar */
}

/*screen özellikleri */

document.getElementById('res2').innerHTML='Ekran genişliği: '+screen.width; /*ekran genişliğini verir */
document.getElementById('res3').innerHTML='Ekran yüksekliği:' +screen.height; /*ekran yüksekliğini verir */
document.getElementById('res4').innerHTML='availWidh: '+screen.availWidth; /*mevcut ekran genişliğini verir */
document.getElementById('res5').innerHTML='availHeight. '+screen.availHeight; /*mevcut ekran yüksekliğini verir kaydırma ve araç çubukları hariç */
document.getElementById('res6').innerHTML='colorDepth: '+screen.colorDepth;
document.getElementById('res7').innerHTML='pixel depth. '+screen.pixelDepth;

/*location özellikleri */

document.getElementById('res8').innerHTML='location href: '+location.href; /*url adresini verir */
document.getElementById('res9').innerHTML='location hostname: '+location.hostname; /*alan adını verir */
document.getElementById('res10').innerHTML='location pathname: '+location.pathname; /*dosya yolunu verir */
document.getElementById('res11').innerHTML='location protocol: '+location.protocol; /*http https bilgisini verir */
document.getElementById('res12').innerHTML='location port: '+location.port; /*port numarasını verir */


function goBack()
{
    window.history.back();
}

function goForward()
{
    window.history.forward();
}

/*window navigatör */

document.getElementById('res13').innerHTML='cookieEnabled: '+navigator.cookieEnabled; /*çerezler açık ise true değil ise false döner */
document.getElementById('res14').innerHTML='app adı: '+navigator.appName;
document.getElementById('res15').innerHTML='app code adı: '+navigator.appCodeName; /*tarayıcı adı döner chrome firefox gibi */
document.getElementById('res16').innerHTML='app code adı: '+navigator.platform;
document.getElementById('res17').innerHTML='navigator product: '+navigator.product;
document.getElementById('res18').innerHTML='navigator platform: '+navigator.platform;
document.getElementById('res19').innerHTML='app version: '+navigator.appVersion; /*tarayıcı versiyonunu verir */
document.getElementById('res20').innerHTML='user agent: '+navigator.userAgent; /*tarayıcı versiyonunu verir */
document.getElementById('res21').innerHTML='language: '+navigator.language; /*tarayıcı dilini verir */
document.getElementById('res22').innerHTML='online: '+navigator.onLine; /*tarayıcı internete bağlı ise true değil ise false döner */
document.getElementById('res23').innerHTML='online: '+navigator.javaEnabled(); /*java yüklü ise true değil ise false döner */


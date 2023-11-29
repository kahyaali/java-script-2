

/* html dom -- bject document model kullanımı */

/*

html dom ile javascript bir html belgesinin tüm öğelerine erişebilir ve bunları değiştirebilir

web sayfası yüklendiğinde tarayıcı sayfanın bir döküman nesne modelini oluşturur

tarayıcı html dom modeli ile elementleri nesnelerden oluşan bir ağaca dönüştürür

HTML Elementlerini Bulma

document.getElementByID(id) = elementin id değeri ile elemente erişme

document.getElementByTagName(name) = elementin name adı ile elemente erişme

document.getElementByClassname(name) = elemente class adı ile erişme

HTML Elementlerini Değiştirme

element.innerHTML = bir html elementinin içini değiştirme

element.attribute = html elementinin öznitelik değerini değiştirme

element.setAttribute(attribute,value) = html öğesinin öznitelik değerini değiştirme

element.style.property = html öğesinin sitilini değiştirme

Eleman Eklem Ve Silme

document.createElement(element) = yeni bir html öğesi oluşturmak için kullanılır

document.removeChild(element) = html öğesini kaldırmak için kullanılır

document.appendChild(element) = html öğesi eklemek için kullanılır

document.replaceChild(element) = html öğesini değiştirmek için kullanılır

document.write = html çıktısı yazar

Olay İşleyicileri Ekleme

document.getElementByID(id).onClick=function(){};

Html Nesne Bulma

document.anchors = bir name özniteliğine sahip tüm <a> öğelerini döndürür

document.applets = tüm <applet> öğelerini döndürür (Html5'te kullanımdan kaldırılmıştır)

document.baseURI = dökümanın mutlak taban URI'sini döndürür

document.body = <body> elementini döndürür

document.cookie = dökümanın çerezini döndürür

document.doctype = belgenin doctype'nı döndürür

document.documentElement = <html> elementini döndürür rrot'u döndürür

document.documentMode = tarayıcı tarafından kullanılan modu döndürür

document.documentURI = dökümanın URI'sini döndürür

document.domain = sunucudaki belgenin alan adını döndürür

document.domConfig =eski dom yapılandırmasını döndürür

document.embeds = tüm <embed> elementlerini döndürür

document.forms = tüm <form> elemanlarını döndürür

document.head = <head> elementini döndürür

document.images = tüm <img> elementlerini döndürür

document.implementation = DOM uygulamasını döndürür

document.inputEncoding = belgenin karakter kodlamasını döndürür

document.lastModified = belgenin güncellendiğ tarih ve saati döndürür

document.links = href öznitelikli <area> ve <a> elemanlarını döndürür

document.readyState = dökümanın (yükleme) durumunu döndürür

document.referrer = yönlendirenin URI'sini (bağlantı belgesi) döndürür

document.scripts = tüm <script> elementlerini döndürür

document.strictErrorChecking = hata kontrolü uygulanıyorsa döner

document.title = <title> elementini döndürür

document.URL = dökümanın tam URL'sini döndürür

innerText = ile elemanın içeriğine erişiyorum veya elementin içeriğine yazı yazıyorum

innerHTML = elemanın içeriğine yazı yazıyorum ve elementin içeriğine erişiyorum


*/

/* h1 etiketine erişip font-size değerini değiştirdik */
document.getElementById('head').style.fontSize='64px';
document.getElementById('res1').innerHTML='p etiketine değer yazdık';
document.getElementById('res1').style.background='yellow'; /* p etiketinin arka plan rengini sarı yaptık */
document.write('document write çalışıyor');

var x=document.getElementById('btn');
x.onclick=function()
{
    document.write('click olayı ile çalıştım');
}


/* id değeri ile elementi bulma */
var findElement1=document.getElementById('result');
alert(findElement1.innerHTML);

/* attribute ile elementi bulma dizi olarak döner sonucu name ifadesi resultname olanları buluyoruz */
var findElement2=document.getElementsByName('resultname');
alert(findElement2[0].innerText);
alert(findElement2[1].innerText);
alert(findElement2[2].innerText);

/* tag ile elementlere erişme buda dizi olarak döner çünkü ayn isme sahip tüm tagleri çağırıyoruz */
var findElement3=document.getElementsByTagName('h5');
alert(findElement3[0].innerText);
alert(findElement3[1].innerText);
alert(findElement3[2].innerText);

/* class name ile elementlere erişme dizi olarak döner */
var findElement4=document.getElementsByClassName('color'); /* class adı color olan elementlere erişir */
alert(findElement4.innerText);

/* querySelector ile elementlere erişme burda class adı yada id değeri üzerinden erişim sağlıyoruz class için . id için # kullanırız  */
var findElement5=document.querySelector('#resultend'); /* tek değer döner id değeri resultend olan elementi döner */
var findElement6= document.querySelectorAll('.color'); /* class adı color olan tüm elementleri getirir dizi döndürür */


/* birden fazla element aynı id yada class adına sahip ise tag adı ile belirtip sadece o elementi çağırabiliriz */
var findElement7=document.querySelector('span.color');


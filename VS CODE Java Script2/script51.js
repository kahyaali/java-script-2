
/* element oluşturma ekleme kaldırma ve değiştirme işlemleri */

/*
yeni bir öğe eklemek için öncelikle öğeyi öğe düğümünü oluşturup mevcut bir öğeye eklemeliyiz

appendChild()= appendChild() metodu yeni elementi bir üst elementin son çocuğu olarak ekler. 
bunu istemiyorsak insertBefore() metodunu kullanabiliriz

insertBefore() = elementi istedğimiz sıraya eklemek için insertBefore() metodunu kullanırız

bir html öğesini kaldırmak için öğenin bir üst öğesini bilmeliyiz

node.remove() = node.remove() metodu DOM 4 belirtiminde uygulanır. fakat zayıf tarayıcı desteği yüzünden bunu pek kullanmıyoruz

DOM hem kaldırmak istenen öğeyi hemde bir üst öğesini bilmek istemektedir

replaceChild() = replaceChild() metodu bir elementi değiştirmek için kullanılır






*/


/* Element Ekleme İşlemleri */
function crtElement()
{
    /* elementi document.creatElement ile oluşturuyoruz */
   var p=document.createElement('p'); /* p elementi oluşturacağımızı belirttik ve bunu bir değişkene atadık*/
   var text=document.createTextNode('c sharp'); /* textnode oluşturduk */
   var parentdiv=document.querySelector('#divParent');
   p.id='p5';
   p.appendChild(text); /* text ifadesini p elementinin içeriği yani child'İ olarak ayarladık */
   parentdiv.appendChild(p); /* p elementini parent div içinde oluşturduk son çocuk olarak ekledi son sıraya ekledi */
}

/* elementi son sıraya değilde istedğimiz elementin öncesi yada sonrasına koymak istersek insertBefora() metodunu kullanırız */

function crt1Element()
{

    var p=document.createElement('p');
    var txt=document.createTextNode('pythoon');
    p.appendChild(txt);
    var prntdiv=document.querySelector('#divParent');
    var p3=document.querySelector('#p3');
    prntdiv.insertBefore(p,p3); /* p elementini p3'ten önce ekler */
}

/* Element Kaldırma İşlmleri */
function rmvElement()
{
    var prntdiv=document.querySelector('#divParent');
    //var rmvp=document.querySelector('#p5');
    var rmvp=prntdiv.lastElementChild;
    prntdiv.removeChild(rmvp);

}

function rmvElement1()
{
    var elmp=document.querySelector('#p5'); /* silinecek elemanı seçiyoruz sonra o elementin bir üst ebevey'nini seçiyoruz çünkü ondan sileceğiz */
    var prnt=elmp.parentNode; /* üst ebevey elementi buluyoruz çünkü ondan sileceğiz child elementini */
    prnt.removeChild(elmp);

    /* 2. yöntem p3 elementinin ebeveyn elementini bulup removeChild diyerek child elementini siliyoruz */
    p3.parentNode.removeChild(p3);
}

/* elementi replace etme child elementi değiştirme */
function chgElement()
{
    var txt=document.createTextNode('yeni oluşan dom');
    var p=document.createElement('p');
    var prnt=document.querySelector('#divParent');
    var p1=document.querySelector('#p1');
    p.appendChild(txt);
    prnt.replaceChild(p,p1);

}



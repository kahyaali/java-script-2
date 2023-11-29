
/* AddEventListener RemoveListener kullanımı kabarcıklanma ve yakalama olayları */

/*

addEventListener() = belirtilen bir elemente bir event handler (olay işleyicisi) ekler 

bir öğeye birçok event handler ekleyebiliriz

removeEventListener() = bu metodu kullanarak bir olay dinleyicisini kaldırabiliriz

element.AddEventListener(event,function,useCapture) 

ilk parametre olayın adı click mousedown gibi

ikinci parametre olay meydana geldiğinde çalıştırılmak istenen fonksiyon

üçüncü parametre ise olay kabarcığı veya olay yakalamayı kullaıp kullanmayacağımızı belirten bir boolean değeridir bu parametre isteğe bağlıdır

olaylar iki aşamalı olarak ele alınır

1. yakalama

2.kabarcıklanma

1. yakalama aşaması sırasında olaylar nesne hiyararşisinde daha düşük olan olay ve hedeflerine gönderilmeden önce üst nesnelere gönderilir 

2. kabarcıklanma aşamasında ise ilk önce hedef öğelere ve daha sonra üst öğelere olaylar gönderilir her iki olay aşamasında da olay işleyicileri kaydedebilirsiniz

true = yakalama aşaması için olay işleyicisini kaydedin

false = kabarcıklanma evresi için olay işleyicisini kaydedin

eski sürüm tarayıcılarda AddEventListener ve RemoveEventListener çalışmaz bunun yerine

attachEvent() ve detachEvent() metotları kullanılmalıdır



*/

var buton=document.querySelector('#btn');
var result=document.querySelector('#result');


/* AddEventListener ile bir elemente birden fazla olay ataması yapabiliriz */
buton.addEventListener('click',showDate);

function showDate()
{
    /* div içinde bir span elementi oluşturup onun içine date değerini yazıyor */
    document.querySelector('#result').innerHTML='<span>'+Date()+'</span>';
}


/* bu yöntem pek kullanışı değil pek tercih edilmemeli */
buton.addEventListener('mouseover',function()
{
    document.querySelector('#result').innerHTML='<span>'+Date()+'</span>';
});


buton.addEventListener('mouseout',changestyle);

function changestyle()
{
    document.querySelector('#result').style.backgroundColor='red';
}


/* pencere boyutu değiştiğinde her pencere boyutu değiştiğinde bu fonksiyon çalışacak */
window.addEventListener('resize',function(){
  this.document.querySelector('#result').innerText=Math.random();
});

var num1=10,num2=20;
buton.addEventListener('dblclick',Topla);

function Topla(){
    document.querySelector('#result').innerText=num1+num2;
}

var p1,p2,div1,div2;
p1=document.querySelector('#p1');
p2=document.querySelector('#p2');
div1=document.querySelector('#div1');
div2=document.querySelector('#div2');


/* false dersem en içteki elementten başlıyor olaylar sonra dış elemente doğru devam ediyor
true da ise en dıştaki element önce olay tetikleniyor sonra iç element olayı gerçekleşiyor */
p1.addEventListener('click',p1clk,false);
div1.addEventListener('click',div1clk,false);
p2.addEventListener('click',p2clk,true);
div2.addEventListener('click',div2clk,true);

function p1clk()
{
     alert('p1 paragrafına tıkladın');
}

function div1clk()
{
    alert('div1 elementine tıkladın');
}

function p2clk()
{
    alert('p2 paragrafına tıkladın');
}

function div2clk()
{
    alert('div2 elementine tıkladın');
}

var txt=document.querySelector('#text');
txt.addEventListener('mouseover',chg,false)

function chg()
{
    txt.style.backgroundColor='yellow';
}

var btnrmv=document.querySelector('#btn1');

btnrmv.onclick=function()
{
    txt.removeEventListener('mouseover',chg); /* mouseover kaldır nereden chg fonksiyonundan kaldır diyoruz */
}

var btn2=document.querySelector('#btn2');

/* tarayıcı bu eventlistener şeklini tanıyormu ona baktık tanıyor ise AddeventListener ile devam edebiliriz tanımıyor ise
attachEvent() ile devam edeceğiz tarayıcı bu eventlistener biçimini tanırsa true döner tanımaz ise false döner
 */
if(btn2.addEventListener)
{
    btn2.addEventListener('click',deneme,false);
}
else if(btn2.attachEvent)
{
    attachEvent('onclick',deneme,false);
}
else
{
    alert('iki biçimde tanınmıyor');
}

function deneme()
{
    alert('click olayı sağlandı');
}
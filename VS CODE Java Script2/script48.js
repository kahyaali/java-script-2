

/* onChange onMouseOver onMouseOut olayları */

/*
   onchange() = değişiklik olduğunda çalışacak kodları yazarız

   onmouseover() = mouse ile üstüne gelince çalışacak kodları yazarız

   onmouseout() = mouse ile üzerinden ayrılınca çalışacak kodları yazarız

   onmousedown() = mouse ile tıklandığında yazılacak kodları yazarız

   onmouseup() = mouse ile tıklanıp bırakıldığı zaman yazılacak kodları yazarız

   onfocus() = maouse ile elemente tıklanınca yani focus olunca yazılacak kodları yazıyoruz

   ondblclick() = mouse ile çift tıklamada yazılacak olan kodları yazarız

   onmousemove() =  mouse hareket ettikçe yazılacak kodları yazıyoruz

   onkeydown() = klavyeden bir tuşa tıklanınca yazılacak kodları yazıyoruz

   onkeyup() = klavyeden bir tuşa tıklanıp bırakılınca yazılacak kodları yazıyoruz



*/

/* onchange() işlemi olduğunda yapılacaklar */
function changeFunction()
{
    var getInput;
    getInput=document.querySelector('#username');
    getInput.value=getInput.value.toUpperCase();
}

/* onmouseover() olduğunda yapılacaklar */
function fnOver(prm)
{
   prm.src='img/off.png';
}

/* onmouseout() olduğunda yapılacaklar */
function fnOut(prm)
{
prm.src='img/on.png';
}


/* 2.yöntem onmouseover ve onmouseout işlemleri için */
var x=document.querySelector('#picture2');
x.onmouseover=function()
{
    this.src='img/off.png'; /* this img elementini temsil etmekte */
}

/* onmouseout olduğunda yapılacaklar */
x.onmouseout=function()
{
    this.src='img/on.png'; /* this img elementini temsil etmekte */
}



demo=document.querySelector('#demo');
/* onmousedown olduğunda yapılacaklar */
  demo.onmousedown=function()
{
    this.style.backgroundColor='yellow'; /* mouse ile tıklayınca sarı bırakınca kırmızı olacak */
    this.innerHTML='merhaba';
    this.style.color='black';
}


/* onmouseup olduğunda yapılacaklar */
demo.onmouseup=function()
{
   this.style.backgroundColor='red'; /* mouse ile tıklayınca sarı bırakınca kırmızı olacak */
   this.innerHTML='güle güle';
}

/* ondobuleclick() olduğunda yazılacaklar */

demo.ondblclick=function()
{
    this.style.backgroundColor='blue';
    this.innerHTML='double click oldu';
    
}


/* onmousemove() olduğunda yapılacaklar */
var y=document.querySelector('#picture4')

y.onmousemove=function()
{
    this.src='img/off.png';
}

function fnmove(prm)
{
    prm.src='img/on.png';
}

/* onfocus() olduğunda yapılacaklar */

var username=document.querySelector('#username');

username.onfocus=function()
{
    username.style.backgroundColor='red';
}

/* onkeydown() olunca yapılacaklar */
var usrname=document.querySelector('#username');
var result=document.querySelector('#result');
usrname.onkeydown=function()
{
    result.innerHTML='bir tuşa basıldı';
}


/* onkeyup() olunca yapılacaklar */

usrname.onkeyup=function()
{
    result.innerHTML='tuş bırakıldı';
}
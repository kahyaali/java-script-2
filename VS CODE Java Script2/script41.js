

/* fonksiyonların kullanımı */

/*
fonksiyonlar çağrılmadan yürütülmezler çağırıldıktan sonra çalışırlar

bir fonksiyon bir değişken atanabilir 

fonksiyon ifadeleri kendini çağırabilir

javascript typeof fonksiyonları function olarak döndürür



 */

function multi(x,y)
{
    return x*y;
}

function message()
{
    alert('function çağrıldı');
}

var toplam=function(x,y)
{
    return x+y;
}

document.getElementById('res1').innerHTML=multi(4,5);

document.getElementById('res2').innerHTML=toplam(10,20);

/* kendi kendini çağıran fonksiyon */
(function()
{
    alert("kendi kendini çağıran fonksiyon");
}());


/* iki parametreli bir fonksiyonda tek parametre girer isek diğer parametreyi kontrol edip kendimiz değer atayabiliriz */
function deger(x,y)
{
    if(y===undefined) /* tip kontrolü yapıyoruz */
    {
        y=1;
    }
    return x*y;
}

document.getElementById('res1').innerHTML=deger(5);

function showMax()
{
    var i,max=-Infinity;
    for(let i=0;i<arguments.length;i++) /* fonksiyonların parametrelerine arguments ile erişiyoruz */
    {
           if(arguments[i]>max)
            {
                max=arguments[i];
            }
    }
    return max;
}

document.getElementById('res2').innerHTML=showMax(7,3,10,5,15,6,20); /* en büyük değer 20 döndürdü */
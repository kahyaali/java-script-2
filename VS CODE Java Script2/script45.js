
/* innerHTML ile elementin içeriğini değiştirebiliriz



*/

document.getElementById('result').innerHTML='yeni p etiketinin içeriği değişti';

/* attribute değiştirme 1. yöntem */
document.querySelector('#img1').alt='yeni isim'; /* img içindeki alt attribute'nin ifadesini değiştirdik */

/* attribute değiştirme 2. yöntem */
document.querySelector('#img1').setAttribute('alt','set attribute ile değişti');

function changeCss1()
{
    document.querySelector('#img1').alt='buton tıklanarak değişti';
}

function changeCss2()
{
    var sitil=document.querySelector('#result');
    sitil.style.color='red';
    sitil.style.backgroundColor='blue';
    sitil.style.padding='16px';
}

function changeCss3()
{

    var hareket,konum=0,hiz;
    var hareket=document.querySelector('.move');
    hiz=setInterval(tekrar,5);

    function tekrar()
    {
        if(konum==550)  /* burda 550 dedik çünkü kutunun kendi değerleri 50 px 550+50 600 eder */
        {
            clearInterval(hiz);
        }
        else
        {
            konum++;
            hareket.style.top=konum+'px';
            hareket.style.left=konum+'px';
        }
    }
}


/*events -- olaylar */

/*
onchange = bir html öğesi değiştiğinde

onclick = kullanıcı tarafından bir html öğesine tıklandığında

onmouseover = kullanıcı mouse bir html öğesi üzerine getirdiğinde

onmouseout = kullanıcı mouse bir html öğesinden uzaklaştırdığında

onkeydown = kullanıcı bir klavye tuşuna bastığında

onload = tarayıcı sayfayı yüklemeyi bitirdiğinde

*/

function message()
{
    alert('web sayfası yüklendi');
    //document.write('sayfa aktif');
}

function message1()
{
   alert('birşeyler değişti');
}

function message3()
{
    alert('butona tıklandı');
}

function message4()
{
    alert('butona çift tıklandı');
}

function message5()
{
    alert('mouse over oldu');
}

function message6()
{
    alert('mouse out oldu');
}

function message7()
{
    document.getElementById('res3').style.color='red';
}

function message8()
{
    document.getElementById('res4').style.color='blue';
}

function mouseMove(e){
    var x=e.clientX;  /*clientX ile x eksenini alıyoruz */
    var y=e.clientY; /*clientY ile y eksenini alıyoruz */
    document.getElementById('res6').innerHTML=`Kordinat x= ${x} kordinat y=${y}`;
}

function Focus() /*focus inputa tıklayınca focus olunca */
{
    document.getElementById('res7').style.backgroundColor='blue';
}

function Blur() /*blur da inputan uzaklaşınca focus olmaktan çıkınca */
{
    document.getElementById('res7').style.backgroundColor='yellow';
}

function Select()
{
    alert('metni seçemezsiniz');
}

alert('yazılım dünya\'nın en güçlü teknoloji icatıdır'); /*çıktısı = yazılım dünya'nın en güçlü teknoloji icatıdır */

alert('yazılım dünya"nın en güçlü teknoloji icatıdır'); /*dışarısı tek tırnak ise içeride çift tırnak kullanabiliriz */

alert("yazılım dünya'nın en güçlü teknoloji icatıdır"); /*dıaşrısı çift tırnak ise içeride tek tırnak kullanabiliriz */
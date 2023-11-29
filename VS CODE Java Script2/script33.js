

/* timing events zamanlama olayları */

/*
javascript zaman aralıklarında yürütülebilir buna zamanlama olayları denir

setTimeout() = setTimeout(fonksiyon,milisaniye) verilen zaman kadar bekledikten sonra işlemi gerçekleştirir

setInterval() = setInterval(fonksiyon,milisaniye) setTimeout() ile aynıdır ancak fonskiyonun yürütülmesini sürekli olarak tekrarlar

clearTimeout() = setTimeout() metodunun çalışmasını durdurur 




*/

function Process()
{
   document.getElementById('res1').innerHTML='setTimeout ile java script kullanımı';
}


/*1 saniyede 1 process fonksiyonunu çalıştırır sonsuz döndüye sokar sürekli bir saniyede bir çalıştırır fonksiyonu */
var clearTimes1=setInterval(Process1,1000);

function Process1()
{
  var d=new Date();
  document.getElementById('res2').innerHTML=d.toLocaleTimeString();
}

var clearTimes2=setInterval(Process2,1000);
function Process2()
{
    var data1,data2,resultValue;
    data1=Number(document.getElementById('d1').value);
    data2=Number(document.getElementById('d2').value);
    resultValue=data1+data2;
    document.getElementById('res3').innerHTML=resultValue;
}


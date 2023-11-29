

/*if else kullanımı */
/*
   belirtilen koşul doğru ise yürütülecek kod bloğu if içinde
   belirtilen koşul doğru değil ise yürütülen kod bloğu else içinde yazılır
   ilk iki koşul yanlış ise yeni bir koşul belirlemek için else if bloğu kullanılır


*/

var x=false;
if(x)
{
  document.getElementById('re1').innerHTML='true kod bloğu';
}
else
{
  document.getElementById('res1').innerHTML='false kod bloğu';
}

function Hesapla()
{
    var f1=Number(document.getElementById('final1').value);
    var f2=Number(document.getElementById('final2').value);
    if(isNaN(f1) || isNaN(f2))
    {
        alert('final notları sayısal bir değer olmalıdır');
    }
    else
    {
    if(f1>f2)
    {
        document.getElementById('res2').innerHTML='f1 f2 den büyüktür';
    }
    else
    {
        document.getElementById('res2').innerHTML='f2 f1 den büyüktür';
    }
    }
}



/* onclick olayı */

function changetext(prm)
{
    /* h1 etiketi kendisi geliyor parametre olarak prm h1 etiketini temsil ediyor */
  prm.innerHTML='butona tıklayınca değişti';
}

function changetxt()
{
    var elm=document.getElementById('etk');
    etk.innerHTML='butona tıklanınca değişti';
}

function karekok()
{
    var x1=prompt('sayıyı giriniz');
    document.getElementById('etk').innerHTML=Math.sqrt(x1);
}
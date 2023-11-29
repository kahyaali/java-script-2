

/*document.write = ekrana yazı yazdırmaya yarar fakat bu komut ile yazdırınca ekrandaki html değerlerini silip
sadece kendi yazdırdığı bilgiyi ekrana yazdırır console ekranına yazmıyor bu komut*/

document.write('merhaba dünya');
//alert('merhaba dünya');

document.write("sonuc= "+(document.getElementById('results').innerHTML='yazıyı ben değiştirdim'));

document.getElementById('results').innerHTML='yazıyı ben değiştirdim';

function degistir()
{
    document.getElementById('results').innerHTML='butona basınca fonksiyon çağırıp değiştirdi';
}
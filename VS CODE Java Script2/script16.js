

/*Boolean veri türü ve karşılaştırma operatörleri*/

/*
   boolean'lar new anahtar kelimesi ile nesnelerden de üretilebilir. boolean nesneleri oluşturmayın uygulama hızını yavaşlatır new anahtar
   kelimesi kodu zorlaştırıyor. bu beklenmedik sonuçlar doğurabilir.
    
   iki veri birbirine eşit ise == ve tip kontrolüde yapacaksa ===
   iki veri birbirine eşit değil ise !=
   bir veri diğerinden büyük ise veya büyük eşit ise > >=
   bir veri diğerinden küçük veya küçük eşit ise < <=
   ve operatörü &&
   veya öpretörü || 
   değil operatörü !



*/

var x=true;
var y=false;
var z=new Boolean(true);

/*boolean metodunu kullanarak ifadenin bool olarak sonucunu alabiliriz boolean kullanmasakta default olarak aynı işlemi yapar */
document.getElementById('res1').innerHTML=Boolean(70>7); 
document.getElementById('res2').innerHTML=typeof z; /*object döner çünkü new anahtar sözcüğü ile nesneden türetildi */
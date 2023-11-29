
/* apply ve call kullanımı */

/*

call() = call() metodu önceden tanımlanmış bir javascrit fonksiyon metodudur ilk nesne argümanı (parametre) olarak bir 
kullanıcı nesnesini çağırmak için kullanılır

call() ile başka bir nesneye ait bir metodu kullanabilirsiniz

apply() = metodu call() metoduna benzer tek fark şudur call() fonksiyonu bağımsız değişkenleri ayrı ayrı alır apply() 
herhangi bir fonksiyon argümanını bir dizi olarak alır


*/


/* nesne tanımladık */
var Person=
{
    firstname:'deneme1',
    lastname:'deneme2',
    age:30,
    eyecolor:'brown',
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }
};

var People=
{
    firstname:'deneme3',
    lastname:'deneme4',
}

var x=Person.fullname.call(People);
var y=Person.fullname.call(People);

document.getElementById('res1').innerHTML=x;
document.getElementById('res2').innerHTML=y;

z=Math.max(2,3,1,10,5,20,4,30,15); /* normalde enbüyük değeri bu şekilde alıyoruz fakat dizilerde bu şekilde alamayız */
document.getElementById('res3').innerHTML=z;

/* dizilerde apply metodunu kullanıyoruz en büyük değeri bulma için apply dizi olarak gönderir 
fonksiyon göndermediğimiz için null yazdık ilk parametreyi*/

var t= Math.max.apply(null,[5,10,7,4,30,2,12,14]); 
document.getElementById('res4').innerHTML=t;


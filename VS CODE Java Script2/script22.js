
/*ype conversion tür dönüşümleri */

/*
    
javascript değişkenleri yeni bir değişkene ve başka bir veri türüne dönüştürülebilir bunu javascript fonksiyonu yada otomatik olarak javascriptin kendisi yapabilir

Global metot String numaraları stringlere dönüştürülebilir

Her türlü sayı ifade değişken üzerinde kullanılabilir

toString() öğesinin Number metoduda aynı işlemi yapar

toExponential(),toFixed(),toPericision() metotlarıda string veri türüne sonuçları dönüştürebilir

Global metot string booleanları stringlere dönüştürebilir

toString() boolean metoduda aynı işlemi yapar

Global metot string tarihleri stringlere dönüştürebilir




*/


/*stringe dönüştürme */
var x=7;
var y=10;

document.getElementById('res1').innerHTML=String(x); /*x değerini string bir ifadeye çevirdi */
document.getElementById('res2').innerHTML= typeof String(x);

document.getElementById('res3').innerHTML=y.toString(); /*bu şekildede string değere dönüştürebiliriz */
document.getElementById('res4').innerHTML=typeof y.toString();

document.getElementById('res5').innerHTML=String(new Date()); /*tarih nesnesini string ifadeye çevirdi */
document.getElementById('res6').innerHTML=typeof String(new Date());

/*Numbere dönüştürme */

var z="100";
document.getElementById('res7').innerHTML=Number(z); /*string ifadeyi sayıya çevirdi */

var k="50";
var m = +k; /*stirn ifadeyi soluna artı koyarak Number değere çevirdi bu şekilde string ifadeyi Number ifadeye çevirebiliriz */

var dt=new Date();
var dtn=Number(dt); /*tarih değerini Number ifadeye çevirdi */
document.getElementById('res8').innerHTML=dtn;
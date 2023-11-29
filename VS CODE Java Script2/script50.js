

/* html dom nodes mantığı */

/*

düğüm ağacındaki düğümler birbirleri ile hiyerarşik bir ilişki içerir

ilişkileri tanımlamak için ebeveyn çocuk ve kardeş(parent,child,sibling) terimleri kullanılır

bir düğüm ağacında en üstte kök düğüm vardır

her düğümün hiç bir üst öğesi olmayan kö düğüm hariç tam olarak bir üst düğümü vardır

bir düğüm birkaç çocuk child düğüm olabilir

kardeşler siblings aynı ebeveyne parent sahip düğümlerdir


Düğümler Arasında Gezinme

parentNode = 

childNodes =  birden fazla çocuk var ise dizi döner hangi elemanı ister isek o index numarasını yazarız

firstChild = ilk çocuğu getirir

lastChild = son çocuğu getirir

nextSibling = bir sonraki kardeşi getirir 

previoussibling = bir önceki kardeşi getirir

Not = DOM işlemesinde genel bir hata bir element düğümünün metin içermesini beklemektir <title> öğe düğümü metin içermiyor DOM tutorial değerine sahip bir metin düğümü içeriyor

metin düğümünün değerine düğümün innerHTML özelliği tarafından erişilebilir

innerHTML özelliğine erişmek ilk çocuğun nodeValue'suna erişmekte aynıdır.

nodeName = bir düğümün adını verir etiket adıyla aynıdır bir metin düğümünün nodeName'i herzaman text'tir belge düğümünün nodeName'i herzaman documenttir

nodeValue = bir düğümün değerini verir

elemanların düğümleri için nodeValue tanımsızdır

metin düğümleri için nodeValue metnin kendisidir

öznitelik düğümleri için nodeValue özellik değeridir

nodeType özelliği salt okunur bir düğümün türünü döndürür

type 1 = element_node

type 2 = attribute_node

type 3 = text_node

type 8 = comment_node

type 9 = document_node

type 10 = document_type_node



*/

var x=document.querySelector('#title').innerHTML;
 //alert(x); /* title içeriği document yazıyor html sayfasında */


/* burada h1 etiketine ulaştık h1 etiketnin ilk çocuğu içerisindeki text değeridir */
var y=document.querySelector('#baslik').firstChild.nodeValue; /* innerHTML ile aynı değeri verir */
 //alert(y);


var elementNodes=document.querySelector('#title').childNodes[0].nodeValue;
 //alert(elementNodes);

var nName=document.querySelector('#head').nodeName;
 //alert(nName); /* etiket adını döner h1 olduğu için h1 değerini dönecektir */

var getAttribute=document.querySelector('#head').getAttributeNode('id').nodeName;
 //alert(getAttribute); /* burada attribute değerini alıyoruz id olduğu için id değerini döner*/

var metin=document.querySelector('#p1').firstChild.nodeName;
 //alert(metin); /* nodeName değeri text dönecektir p etiketinin içeriği text olduğu için text dönecektir */

 var getatt=document.querySelector('#head').getAttributeNode('ajax').nodeValue;
 //alert(getatt);

 var ntype=document.querySelector('#p1').firstChild.nodeType; /* 3 döner text_node */
 //alert(ntype);


 /* bu div'in üst ebeveyni'nin ismini alıyorum  bunun üst ebeveyni body elementidir*/
 var divparent=document.querySelector('#head1').parentNode.nodeName; 
//alert(divparent);

/* h3 etiketninide üst parentode'u body elementidir */
var divparent1=document.querySelector('#divparent1').parentNode.nodeName; 
//alert(divparent1);


/* p etiketinin parent'i içinde bulunduğu div elementidir div elementini aldık div'in arka plan rengini değiştirdik*/
var divparent2=document.querySelector('#p4').parentNode;
divparent2.style.backgroundColor='yellow';
divparent2.style.textAlign='center'; /* textleri divin ortasına çeker */

/* divparent 1 tüm çocuklarına ulaşmak için children ifadesini kullanırız dizi döner bize */
var divchildren=document.querySelector('#divparent1').children; /* 10 tane element var */
//alert(divchildren.length);
divchildren[0].style.backgroundColor='red';
divchildren[1].style.backgroundColor='blue';
//alert(divchildren[0].firstChild.nodeValue); /* div elementinin child'i olan h1 etiketine eriştik firstchild ilede h1 etiketinin child'ina eriştik */

/* bu şekilde de div'in child'i olan H1 etiketinin içeriğini alabiliriz */
//alert(divchildren[0].firstChild.nodeValue);
//alert(divchildren[0].innerHTML);
//alert(divchildren[0].innerText);
//alert(divchildren[0].textContent);


/* for döngüsü ile tüm child elementlerin arka plan rengini kırmızı yaptık */
for(var x of divchildren)
{
    x.style.backgroundColor='red';
}


/* div'in içindeki ilk child olan elemente eriştik oda h1 etiketi sonra firstchild diyerek h1 etiketinin içeriğine eriştik
bu şekilde teksatırda yazabiliriz  */
var divfirst1=document.querySelector('#divparent1').firstElementChild.firstChild.nodeValue;
//alert(divfirst1);

/* div çindeki son element child'e erişim */
var lstchild1=document.querySelector('#divparent1').lastElementChild.firstChild.nodeValue;
//alert(lstchild1);

/* nextelementsibling olarak bir sonraki kardeşe yani elemente erişme bir sonraki element p etiketidir*/
var sbling1=document.querySelector('#head').nextElementSibling;
//alert(sbling1.firstChild.nodeValue);


/* preciouselementsibling diyerek bir önceki kardeşe yani elemente erişiyoruz h1 etiketidir */
var sbling2=document.querySelector('#p1').previousElementSibling;
//alert(sbling2.firstChild.nodeValue);

/* nextelementsibling.nextelementsibling diyerek iki sonraki elemente erişiyoruz id'si p2 olan elemente geçmiş oluyoruz */
var sbling3=document.querySelector('#head').nextElementSibling.nextElementSibling;
alert(sbling3.firstChild.nodeValue);









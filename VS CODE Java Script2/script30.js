

/* JSOn Kullanımı */

/*
json verileri depolamak ve taşımak için kullanılan bir formattır

json bir sunucudan bir web sayfasına veri göndermede sıklıkla kullanılır

json java script uygulamaları için oluşturulmuş bir veri formatıdır javaScript Object Notation'nun kısaltmasıdır

JSON Syntax Rules

veri adı değer çiftlerinde tutulur

veriler virgül ile ayrılır

{} süslü parantezler nesneleri tutat

[] köşeli parantezler dizileri tutar


*/

var txt='{"langs":[{"firstname":"Node","lastname":"js"},{"firstname":"angular","lastname":"js"},{"firstname":"react","lastname":"js"},{"firstname":"vue","lastname":"js"}]}';

var obj=JSON.parse(txt); /*json nesnesini parçaladık ayrıştırdık*/
document.getElementById('res1').innerHTML=obj.langs[0].firstname+" "+obj.langs[0].lastname;
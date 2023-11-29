

/* ecmascript6 kullanımı */

/*

değişken tanımlamak için let ven const ifadeleri kullanılmaktadır
const = sabit değişkenler oluşturmak için kullanılır sabitt değişken tanımlanırken değeri hemen verilmelidir başka bir satırda değer verilir ise 
kabul olmaz sabit değişken tanımlandığı satırda değeri verilmelidir

const num1=10; bu şekilde tanımlanmalıdır



*/

'use strict' /* bu ifade javascript kurallarına uyacağım anlamına gelir kural dışı bir tanım yapılınca kabul etmiyor */
const PI=3.14;

//document.querySelector('#result').innerHTML=PI;


/* burada sabit olan lang değişkenidir içerisindeki değişkenler sabit değildir lang içerisindeki değşkenlerin değerlerini değiştirebiliriz */
const lang={name:'javascript',type:'ecmascript 6',year:2015};
lang.name='c sharp'; /* name ifadesinin değerini c sharp olarak değiştirebilirim  */

/* const olarak tanımlanmış bir nesneye başka bir atama yapamayız değişkenleri ile çağırıp anca atama yapabiliriz  */
lang={name:'Node JS',type:'ecmascript 7',year:2020}; 


/* diziyi const ile tanımlayıp dizi metotları ile atama yapabilirim */
const arr1=['javascript','angular js','react js'];
arr1[0]='c sharp';
arr1.push('pythoon');

/* bu şekilde const olarak tanımlanmış bir diziyi ikinci bir sefer tanımlayamam */
  arr1=['deneme2','deneme2'];

/* default parameters kullanımı */

/* default parametre verdik eğer fonksiyonu çağırırken değer vermeyi unutur isek default parametreyi verecektir
eğer biz değer verirsek bizim verdiğimiz değeri alacaktır */
function show(x=1) 
{
    return x;
}

document.querySelector('#result').innerHTML=show(5);
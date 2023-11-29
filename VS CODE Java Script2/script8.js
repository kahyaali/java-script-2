

/*java script number metotları */

/*
   toString() = bu metot bir sayıyı string olarak döndürür

   toExponential() = üstel gösterim verilen değer kadar ondalıklı kısmı getir parantez içine kaç yazdıysak virgülden sonra o kadar basamak değerini getirir
   2 yazdıysak virgülden sonra 2 basamak olacak şekilde getirir

   toFixed() = belirtilen sayıda ondalık sayıyı bir string olarak döndürür
    
   toPericision() = belirtilen bir uzunluktaki sayıyı bir string olarak döndürür virgülden önce ve sonra olacak şekilde sayıyı belirler
   örneğin 7.856 (2) dersem çıktı 7.9 656 değerini yukarı yuvarlar olur (3) 7.86 56 değerini yukarı yuvarlar olur (4) 7.856 olur

   valueOf() = bir sayı oalrak yine bir sayı döndürür tüm javascript veri türlerinin bir valueOf() ve bir toString() yöntemi vardır

   değişkenleri sayılara döndürmek için 3 javascript yöntemi vardır

1. Number()

2. ParseInt()

3. parseFloat()

bu yöntemler number metotları değil genel global javascript metotlarıdır

MAX_VALUE =javascripteki maximum değeri verir

MIN_ALUE =javascripteki minimum değeri verir

*/

show();
function show(){

    var x=100;
    var y=7.256;
    var z=5.662;
    var t=7.856;
      document.getElementById('res1').innerHTML= typeof x.toString(); /*sayısal değeri string değere çevirdi */
      document.getElementById('res2').innerHTML=y.toExponential()+"<br>"
      +y.toExponential(2)+"<br>"
      +y.toExponential(3)+"<br>"
      +y.toExponential(4)+"<br>"
      +y.toExponential(5);

      document.getElementById('res3').innerHTML=z.toFixed(0)+"<br>" /*çıktısı 6 olur */
      +z.toFixed(2)+"<br>"  /*çıktısı 5.66 olur */
      +z.toFixed(3)+"<br>" /*çıktııs 5.662 olur */
      +z.toFixed(4)+"<br>" /*çıktısı 5.6620 olur */
      +z.toFixed(5); /*çıktısı 5.66200 olur */

      document.getElementById('res4').innerHTML=t.toPrecision()+"<br>" /*çıktısı 7.856 olur */
      +t.toPrecision(2)+"<br>"  /*çıktısı 7.9 olur */
      +t.toPrecision(3)+"<br>" /*çıktııs 7.86 olur */
      +t.toPrecision(4)+"<br>" /*çıktısı 7.856 olur */
      +t.toPrecision(5); /*çıktısı 7.8560 olur */
}

show1();
function show1(){
    var num1=10; /*number veri tipinde */
    var num2=new Number(20); /*object veri tipinde */
    var num3='30';
    var num4='50';
    var num5=7.365;
    var num6='5.765';

    /*string ifadenin başında veya sonunda boşluk varsa yine number değere çevirir çünkü boşlukları dikkate almaz
      ' 50' veya '50 ' gibi sadece değere odaklanır
    */
    document.getElementById('res5').innerHTML=num1.valueOf(); /*sayının kendisini döner number tipinde */
    document.getElementById('res6').innerHTML=num2.valueOf(); /*object olan veri tipiniden number veri tipine çevirdi */
    document.getElementById('res7').innerHTML=Number(3); /*string olan değeri number değere çevirir */
    /*string değeri number değere çevirdi float olan değeri tam sayıya çevirdi virgülden sonrasını almadı */
    document.getElementById('res8').innerHTML=parseInt(num4)+"<br>"+parseInt(num5); 
    document.getElementById('res9').innerHTML=parseFloat(num6); /*string olan ifadeyi float değere çevirdi */

    document.getElementById('res10').innerHTML='maximumd değer '+Number.MAX_VALUE+"<br>" /*java scriptteki max değer */
    +'minimum değer '+Number.MIN_VALUE+"<br>" /*java scripteki min değer */
    +'negatif infinity '+Number.NEGATIVE_INFINITY+"<br>"
    +'positive infinity '+Number.POSITIVE_INFINITY;
}
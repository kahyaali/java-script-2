

/* try catch throw finally kullanımı */

/*

try = bir kod bloğunu hatalar için test etmeye izin verir

catch = hatayı yakalamayı hatayı işlemeye izin verir

finally = sonuca bakılmaksızın denemek yada yakalamak için kodu yürütmenize izin verir

throw = özel bir hata fırlatmak için kullanılır

e.name = hatanın adını verir reference error gibi

e.message = hatanın ne olduğun verir

6 farklı hata adı vardır

1. EvalError = fonksiyonda bir hatayı gösterir javascript yeni sürümleri eval error atmaz onun yerine syntax error kullanılmalı

2. RangeError = 4 basamaklı sayıya kadar kabul ediyor 5 basamaklı sayı girersek hata alırız

3. ReferenceError = usulsüz bir reference olduğunda

4. SyntaxError = bir yazım dizisi hatası olduğunda 

5. TypeError = bir tür hatası olduğunda

6. URIError = encodeURI hatası oluştu




*/

function error()
{
    var message,inputValue;
    inputValue=document.getElementById('data').value; /*input elementine girilen değeri aldık */
    message=document.getElementById('res1');
    message.innerHTML=""; /*elementin içini boşalttık */
    try {
       if(inputValue=="")
       {
         throw 'Bu alanı boş bırakamazsınız';
       }
       else if(isNaN(inputValue))
       {
        throw 'Girilen değer bir sayı değildir';
       }
       inputValue=Number(inputValue); /*string olan değeri Number değere çevirdik */
       if(inputValue<5)
       {
           throw 'Girilen sayı 5\'ten küçük olamaz';
       }
       else if(inputValue>20)
       {
        throw 'girilen sayı 20\'den büyük olamaz';
       }
    } catch (e) {
        message.innerHTML=e;
    }
    finally
    {
        //inputValue.value="";
       document.getElementById('data').value="";
    }

    /*eval error */

    try {
        eval("alert('error denemesi');");
    } 
    catch (error) {
        document.getElementById('res2').innerHTML=error.name;
    }
}
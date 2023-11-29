

/*validation api */

/*
checkValidity() = bir input elemanı geçerli veri içeriyorsa true değerini döndürür yoksa false döner

setCustomValidity() = bir input elemanının validationMessage özelliğini ayarlar

validity = bir input elemanının geçerliliği ile ilgili boolean özelliğini içerir

validationMessage = geçerlilik yanlış olduğunda bir tarayıcının görüntüleyeceği mesajı içerir

willValidate =bir input elemanının onaylanıp onaylanmayacağını belirtir

customError = özel geçerlilik mesajı ayarlanmış ise true olarak döner

patternMismatch = bir elementin değeri pattern özniteliğiyle eşleşmiyorsa true olarak döner

rangeOverflow = bir elementin değeri max özelliğinden büyük ise true olarak döner

rangeUnderflow = bir elementin değeri min özelliğinden düşük ise true döner

stepMismatch = bir elementin değeri step özniteliği başına geçersiz ise true döner

tooLong = bir elementin değeri maxLength özniteliğini aşar ise true döner

valueMissing = (required nitekikli) bir öğenin değeri yok ise true döner

valid = bir elementin değeri doğrulanır ise true döner

Not = checkValidity() yazınca tüm hatarlı yakalıyordu biz tüm hataları yakalamak istemiyorsak tek tek gerekli olanları almak istiyorsak checkValidity() yerine 
validity.rangeOverflow , validity.rangeUnderflow , validity.valueMissing gibi kendimiz yazarız gerekli hata yakalama ifadesini


*/

function validateForm1()
{
    var valueInput,resultFasle,ResultTrue,message;
    resultTrue=document.getElementById('resultTrue');
    resultFalse=document.getElementById('resultFalse');
    valueInput=document.getElementById('number');


    /*input boşb bırakılır ise lütfen bu alanı doldurun diye mesaj veriiyor yada string girersem lütfen bir sayı girin diye hata veriyor
    çünkü input number olarak tanımlı inputta verilen özelliklere bakarak hata mesajı üretiyor validationMessage ile
    bu mesajı alıyoruz  */
    if(valueInput.checkValidity()==false) 
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        message=valueInput.validationMessage; /*java script kendi doğrulama kodu ile yapıyor */
        resultFalse.innerHTML=message;
    }
    else
    {
        resultFalse.style.display='none';
        resultTrue.style.display='block';
        message='Hiç bir problem görünmüyor';
        resultTrue.innerHTML='hiç bir sorun görünmüyor';
    }
}

function validateForm2()
{
    var valueInput,resultFasle,ResultTrue,message;
    resultTrue=document.getElementById('resultTrue');
    resultFalse=document.getElementById('resultFalse');
    valueInput=document.getElementById('number');


     /* inputun verilen max değerini geçip geçmediğini kontrol eder geçmiş ise true döner inputta max değer verilmiş olması gerek */
    if(valueInput.validity.rangeOverflow) 
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        message=valueInput.validationMessage; /*java script kendi doğrulama kodu ile yapıyor */
        resultFasle.innerHTML=message;
    }
    else
    {
        resultFalse.style.display='none';
        resultTrue.style.display='block';
        message='Hiç bir problem görünmüyor';
        resultTrue.innerHTML='hiç bir sorun görünmüyor';
    }
}

function validateForm3()
{
    var valueInput,resultFasle,ResultTrue,message;
    resultTrue=document.getElementById('resultTrue');
    resultFalse=document.getElementById('resultFalse');
    valueInput=document.getElementById('number');


     /* inputun verilen min değerinin altında kalırsa geriye true döner inputta min değeri belirlenmiş olması gerek */
    if(valueInput.validity.rangeUnderflow) 
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        message=valueInput.validationMessage; /*java script kendi doğrulama kodu ile yapıyor */
        resultFasle.innerHTML=message;
    }
    else
    {
        resultFalse.style.display='none';
        resultTrue.style.display='block';
        message='Hiç bir problem görünmüyor';
        resultTrue.innerHTML='hiç bir sorun görünmüyor';
    }
}

function validateForm4()
{
    var valueInput,resultFasle,ResultTrue,message;
    resultTrue=document.getElementById('resultTrue');
    resultFalse=document.getElementById('resultFalse');
    valueInput=document.getElementById('number');


     /* inputun değer girilmez ise boş bırakılır ise geriye true döner required kontrolü yapar inputta required yazılması gerek
     kontrol sağlanması için  */
    if(valueInput.validity.valueMissing) 
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        message=valueInput.validationMessage; /*java script kendi doğrulama kodu ile yapıyor */
        resultFalse.innerHTML=message;
    }
    else
    {
        resultFalse.style.display='none';
        resultTrue.style.display='block';
        message='Hiç bir problem görünmüyor';
        resultTrue.innerHTML='hiç bir sorun görünmüyor';
    }
}

function validateForm5()
{
    var valueInput,resultFasle,ResultTrue,message;
    resultTrue=document.getElementById('resultTrue');
    resultFalse=document.getElementById('resultFalse');
    valueInput=document.getElementById('username');


     /* inputa girilen karakter sayısı maxLength'ta verilen karakter sayısını aşar ise true döner  */
    if(valueInput.validity.tooLong) 
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        message=valueInput.validationMessage; /*java script kendi doğrulama kodu ile yapıyor */
        resultFalse.innerHTML=message;
    }
    else
    {
        resultFalse.style.display='none';
        resultTrue.style.display='block';
        message='Hiç bir problem görünmüyor';
        resultTrue.innerHTML='hiç bir sorun görünmüyor';
    }
}

function validateForm6()
{
    var resultFalse,ResultTrue;
    resultTrue=document.getElementById('result1True');
    resultFalse=document.getElementById('result1False');

     /* form name adını yazarak checkbox'a ulaşıyoruz seçili olup olmadığını kontrol ediyoruz  */
    if(document.formValidate.chcbox.checked) 
    {
        resultFalse.style.display='none';
        alert('üyelik kabul edildi');
    }
    else
    {
        resultFalse.style.display='block';
        resultTrue.style.display='none';
        resultFalse.innerHTML='bu kutuyu işaretlemeden devam edemezsiniz';
    }
}
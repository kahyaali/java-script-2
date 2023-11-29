

/*popup boxes açılır kutu yapımı */

/*

javascriptte üç çeşit açılır kutu vardır

1. uyarı kutusu

2. onayla kutusu

3. komut kutusu

kullanıcı tamam tıklarsa true döner kullanıcı iptal tıklarsa false değeri döner

kullanıcıdan veri girişi aldıktan sonra tamam tıklarsa kutu giriş değerini döndürür iptal tıklarsa null değeri döner

confirm() = javascriptte onaylama işlemleri confirm ile yapılır

promt() = promt ile kullanıcıdan bilgi almak için text kutucuğu açar tamama tıklarsak değeri iptale tıklarsak null değer döner




*/

function boxes()
{
    alert('deneme sürümü');
}

/*tamam iptal durumlarının incelenmesi */
function boxes1()
{
    var message;
    /*confirm dediğim için tamam ve iptal butonları geldi tamam dersem true iptal dersem false dönecek */
    if(confirm("silmek istediğinizden eminmisiniz?"))
    {
       message='seçilen öğe silindi';
    }
    else
    {
        message='seçilen öğe silinmedi';
    }
    document.getElementById('res1').innerHTML=message;
}


/*kullanıcıdan girdi almak */
function boxes2()
{
    var message,getValue;
    /*kullanıcıdan bilgiyi promt ile alıyoruz bize text alanı açıyor değer girmek için tamama tıklar ve kutucuk boş ise boş döner iptale tıklar
    ise null döner null değerini iptal butonundan "" boş değerini ise tamama tıklayınca değer girmemiş ise o yüzden alıyoruz*/
    getValue=prompt("lütfen dersin adını giriniz");
    getValue=prompt("lütfen dersin adını giriniz",'deneme'); /*bu şekil yazarsam deneme yazılı olarak gelir text içinde */
    if(getValue==null || getValue=="") /*null ise kullanıcı birşey girmemiş demek */
    {
       message='Değer girmediniz';
    }
    else if(getValue=='javascript')
    {
        message='dersin adını doğru bildiniz';
    }
    else
    {
        message=getValue;
    }
    document.getElementById('res1').innerHTML=message;
}
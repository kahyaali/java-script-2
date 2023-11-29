

/* getElementByName kullanımı */

function show()
{
    var username,usernames;
    username=document.getElementById('username').value;
    /*bu ifade dizi döndürüyor o yüzden hangi elementi istiyorsak index numarası ile belirtiyoruz */
    usernames=document.getElementsByName('test');
    usernames[0].innerHTML='c sharp';
    usernames[1].innerHTML='javascript';
    usernames[2].innerHTML='angular js';
    usernames[3].innerHTML='jquery';

}


/* onLoad onUnLoad onScroll olayları */

/*
  onLoad() =  sayfa yüklendiğinde işlem yapar

  onUnLoad() = sayfadan çıkınca işlem yapılmasını sağlar

  onScroll() = scroll çubuğu her hareket ettiğinde bir fonskiyon çağırıp işlem yapabiliriz


*/


/* cookie denetimi yapıyoruz body etiketi içinde çağırdık onLoad() metodu ile */
function checkCookies()
{
    var message="";
    /* navigator.cookieEnabled ile cookie kontrolü yaparız false ise cookie'ler kapalı demek*/
    if(navigator.cookieEnabled==false)
    {
      message='Cookie\'ler kapalı açılması gerekmektedir';
    }
    else
    {
        message='Cookie aktif';
    }
    alert(message);
}


/* sayfa yüklenince işlem yapılmasını sağlar */
window.onload=function()
{
   var obj=document.querySelector('#result');
   obj.style.backgroundColor='yellow';
   obj.innerHTML='yeni deneme yazısı';
   obj.style.fontSize='25px';
   obj.style.color='blue';
}


/* sayfadan ayrılınca işlem yapılmasını sağlar */
window.onunload=function()
{
  alert('sayfadan ayrılıyorsunuz');
}


/* scroll hareket ettikçe x değeri artıyor eğer x değişkenini function içine koysaydık artmayacaktı çünkü her fonksiyon çağırıldığında 
x değişkenine 0 basacaktı */
var x=0;
function myFunction()
{
    document.querySelector('#result').innerHTML=x++;
}
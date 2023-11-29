

/* Form validation işlemleri */

/*
checkValidity() = bir input elemanı geçerli veri içeriyorsa true değerini döndürür yoksa false döner

setCustomValidity() = bir input elemanının validationMessage özelliğini ayarlar


*/




// function validateForm()
// {
//     /*var forms ile sayfada yer alan formlara erişiyoruz forms[0] demek birden fazla form var ise ilkine eriş demek */
//     var valueUserName,valuePassword,Result1="";
//     Result1=document.getElementById('res1');
//     /*p etiketini görünür hale getiriyoruz */
//     Result1.style.display='block';

//     /*forms ile bulup index numarası vererek ulaşırım yada direk formun name değerini yazarak erişebilirim */
//     valueUserName=document.forms[0].username.value;
//     valuePassword=document.forms[0].password.value;

//     /*input boşmu kontrol ediyoruz */
//     if(valueUserName=="")
//     {
//         Result1.innerHTML='Kullanıcı adı boş geçilemez';
//         alert('kullanıcı adı boş geçilemez');
//         /*eğer username boş ise formu post etmesini engellemek gerek bu yüzden return false döndürdürk true döndürseydik formu post edecekti */
//         return false;
//     }
// }

function validateForm1()
{
    var UserName,Password,message,Result2="";
    Result2=document.getElementById('res2');
    /*p etiketini görünür hale getiriyoruz */
    Result2.style.display='block';

    
    UserName=document.getElementById('username1').value;
    Password=document.getElementById('password1').value;

    /*input boş mu kontrol ediyoruz */
    if(Password == "" || Password==null)
    {
        message='password boş geçilemez';
        //alert('password boş geçilemez');
    }
    else if(isNaN(Password)) /*true dönerse bu bir sayı değiş string değerdir */
    {
      message='lütfen şifreyi rakamlardan giriniz';
    }
    else if(Password<5 || Password>10)
    {
        message='lütfen 5 ile 10 arasında bir sayı giriniz';
    }
    else
    {
        message='adımlar tamamlandı';
    }

    Result2.innerHTML=message;
}





/* karakter sınırlaması uygulaması */

/*


*/

var msg,result,chracter=150,chracterLength;

msg=document.querySelector('#message'); /* textarea etiketini message değişkenine atadık */
result=document.querySelector('#result'); /* p res1 etiketini result değişkenine atadık */

msg.onkeydown=chracterControl; /* textarea onkeydown veya onkeyup olduğunda bu fonksiyonu çalıştıracak */
msg.onkeyup=chracterControl;  /* textarea onkeydown veya onkeyup olduğunda bu fonksiyonu çalıştıracak */ 

function chracterControl()
{
    chracterLength=this.value.length;
    
    if(chracter>=chracterLength)
    {
         var lastLength=chracter-chracterLength;
         result.textContent=lastLength+' karakter kaldı'; /* p etiketine kalan karakter sayısını gösteriyoruz */
         
    }
    else
    {
        /* bu ifadeyi yazmaz isek 150 karakterden sonra yazmaya devam eder 0.indexten başla 150 karaktere kadar getir sınırlıyorum
        daha fazla karakter yazmasını */
       this.value=this.value.substr(0,chracter);
    }
    
}


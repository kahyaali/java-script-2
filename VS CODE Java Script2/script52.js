

/* select ve checbox işlemleri */

/*






*/

var btn=document.querySelector('#btn'); /* btn butonu sayfadan seçtik */
var getIndex=document.querySelector('#city'); /* select içerisinden seçili olan elemanın index numarasını alıyoruz */

   //var GetIndex=document.querySelector('#city').selectedIndex
   //getIndex.selectedIndex; /* bu şekildede seçili elemanın index numarasını alabilirdik */ 
   // var valueSelected=document.querySelector('#city').options[getIndex].value;

// btn.addEventListener('click',function(){
//    var valueSelected=getIndex.options[getIndex.selectedIndex].value; /* value değerini attribute olan value değeri gelir  */
//    var valueSelected=getIndex.options[getIndex.selectedIndex].text; /* text değerini getirir option içeriğindeki text değeri gelir */
//    alert(valueSelected);
// });

btn.addEventListener('click',SelectExp);
btn1.addEventListener('click',ChkBox);

function SelectExp(){
    var valueSelected=getIndex.options[getIndex.selectedIndex].value; /* value değerini attribute olan value değeri gelir  */
   var valueSelected=getIndex.options[getIndex.selectedIndex].text; /* text değerini getirir option içeriğindeki text değeri gelir */
    alert(valueSelected);
 };

 function ChkBox(){
    var control=document.querySelector('#accept'); /* checkbox elementini seçtik */
    if(!control.checked) /* checbox seçili mi değilmi onu kontrol ediyoruz seçili değil ise mesajı verdiriyoruz */
    {
       alert('lütfen güvenlik şartlarını okuyunuz');
    }
    else
    {
        alert('Üyelik gerçekleştirildi');
    }
 }
 




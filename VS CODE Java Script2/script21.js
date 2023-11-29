

/*break continue ve label kullanımı */

/*
  break = break bir döngüyü atlamamızı sağlar döngüyü sonlandırır

  continue = continue bir döngüde bir şartı geçmemizi sağlar



*/

var arr1=['php','js','node js','c sharp','pythoon'];



function show()
{
    var message="";
    var getTake=document.getElementById('x1').value;
    switch(getTake)
    {
  case 'php' : message='php doğru bildiniz'; break;
  case 'js' : message='js doğru bildiniz'; break;
  case 'node js': message='node js doğru bildiniz'; break;
  case 'c sharp' : message='c sharp doğru bildiniz'; break;
  case 'pythoon': message='pythoon doğru bildiniz';break;
  default: message='böyle bir seçim yok'; break;
   }
    document.getElementById('res1').innerHTML=message;
}
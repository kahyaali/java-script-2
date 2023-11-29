

/*for döngüsü kullanımı */

/*
  1. for

  2. for / in

  3. while

  4. do / while


*/

var n1,i;
n1="";
for(i =0;i<10;i++)
{
    n1 +=i+"<br>";
}

document.getElementById('res1').innerHTML=n1;


/*Normal fpr döngüsü */
var arr1=['den1','den2','den3','den4','den5','den6','den7','den8','den9','den10'];
var arrtext1="";
for(let i=0;i<arr1.length; i++)
{
      arrtext1 += arr1[i]+"<br>";
}
document.getElementById('res2').innerHTML=arrtext1;

/*for - of döngüsü */
var arr2=['den1','den2','den3','den4','den5','den6','den7','den8','den9','den10'];
var arrtext2="";
for(var element of arr2)
{
      arrtext2 += element+"<br>";
}
document.getElementById('res3').innerHTML=arrtext2;

/*for - in döngüsü */
var arr3=['den1','den2','den3','den4','den5','den6','den7','den8','den9','den10'];
var arrtext3="";
for(var element in arr3)
{
      arrtext3 += arr3[element]+"<br>";
}
document.getElementById('res4').innerHTML=arrtext3;
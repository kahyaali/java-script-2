

/* while ve do - while döngüleri*/

/*
   


*/


/*while kullanımı */
var x=0,n1="";
while(x<10)
{
    n1 += 'number1: '+x+"<br>";
    x++;
}
document.getElementById('res1').innerHTML=n1;

/*do while kullanımı */
var y=0,n2="";
do
{
   n2 += 'number2: '+y+"<br>";
   y++;
}
while(y<10)

document.getElementById('res1').innerHTML=n2;
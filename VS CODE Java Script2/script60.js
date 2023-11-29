

/* Ecmascript6 template literals - şablon değişmezleri*/

/*
    temlate literal dediği olay `${} ifadeleri ile işlem yapmak demektir $ template literal ile getirilmiştir`

*/

var r1=document.querySelector('#result1');
var r2=document.querySelector('#result2');


function getFullName(fname,lname)
{
    r1.innerHTML='Verilen isim: '+fname+' '+lname;
}

getFullName('deneme1','deneme2');

function getFullName1(firstname,lastname)
{
   r2.innerHTML=`Verilen İsim: ${firstname} ${lastname}`;
}

getFullName1('deneme3','deneme4');
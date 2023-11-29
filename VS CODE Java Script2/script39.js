

/* Object özellik ve metotları */

/*



*/

var people,x,message="";

function person(first,last,age,color)
{
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=color;
    this.fullname=function()
    {
       return this.firstname+" "+this.lastname;
    }

    this.changename=function(name)
    {
        return this.firstname=name;
    }
}

people=new person('deneme1','deneme2',30,'brown');

for(x in people)
{
    message+=people[x]+"<br>";
}

people.hair=true; /* buraki ifade fonksiyon içinde this.hair=hair işlemine benzer bu şekilde ekleme yapabiliriz */

document.getElementById('res1').innerHTML=message;
document.getElementById('res2').innerHTML=people.fullname();
document.getElementById('res3').innerHTML=people['firstname']+" "+people['lastname'];
document.getElementById('res4').innerHTML=people.hair;

delete people.eyecolor; /* people nesnesindeki göz rengi değişkenini silmiş olduk */

people.changename('yeni isim');

document.getElementById('res5').innerHTML=people.firstname;


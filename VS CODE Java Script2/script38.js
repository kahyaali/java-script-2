

/* Nesne oluştutma yöntemleri */

/*

javascript ile kendi nesnelerimizi oluşturabiliriz

yei nesne oluşturmak için farklı yollar vardır

1. bir nesne değişmezini kullanarak tek bir nesne tanımlayın ve kullanın

2. new anahtar kelimesi ile tek bir nesne tanımlayın ve kullanın

3. bir constructor ve sonra oluşturulan tür nesneleri oluşturun

4. ECMAScriptt 5'te bir nesne object.create() fonskiyonu ile oluşturulabilir

this = this anahtar kelimesi javascript kodunu sahip olunan nesnenin kendisidir bir fonksiyonda kullanıldığında this değeri nesne yapan fonksiyonun kendisidir

javascript'te dahili constructorlar

Object()

String()

Number()

Boolean()

Array()

RegExp()

Funciton()

Date()

Math() global bir nesnedir new anahtar kelimesi ile kullanılmaz

nesneler değiştirilebilir bunlar değer yerine referans ile gönderilir person bir nesne ise aşağıdaki ifade person'nın bir kopyasını oluşturmaz

var x=person()  x nesnes person'nın bir kopyası değildir hem x hemde person aynı nesnedir x'te yapılacak değişiklikler person'nıda etkileyecektir

*/

/* nesne oluşturduk nesne değişmezi kullanarak nesne oluşturduk bu statik bir nesnedir içindeki değişkenleri değiştiremeyiz
tek nesne var ise ve statik olmasını istiyorsak bu yöntemi kullanabiliriz 
literal ile nesne oluşturma yöntemidir*/
var person={
    firstname:'deneme1',
    lastname:'deneme2',
    age:30,
    eyeColor:'green',
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }
};

document.getElementById('res1').innerHTML=person.firstname+"<br>"
+person.lastname+"<br>"
+person.age+"<br>"
+person.eyeColor+"<br>"
+person.fullname();

/* new anahtar kelimesi ile nesne oluşturma  bu yöntemi pek kullanmamalıyız new anahtar kelimesi kodu yavaşlatıyor
bu şekilde tek bir nesne oluşturulabilir*/

var person1=new Object();
person1.firstname='deneme3';
person1.lastname='deneme4';
person1.age=40;
person1.eyeColor='blue';


document.getElementById('res2').innerHTML=person1.firstname+"<br>"
+person1.lastname+"<br>"
+person1.age+"<br>"
+person1.eyeColor+"<br>";

/* constructor ile nesne tanımlama this nerede isek oranın ismini kullanmak için kullanılır
burada person2 içinde olduğumuzdan person2 yerine this kullanabiliriz
bu şekilde nesne üretmek daha kullanışlı */

function person2(first,last,age,color)
{
   this.firstname=first;
   this.lastname=last;
   this.age=age;
   this.eyeColor=color;
}

var myperson=new person2();
myperson.firstname='deneme5';
myperson.lastname='deneme6';
myperson.age=50;
myperson.eyeColor='black';

document.getElementById('res3').innerHTML=myperson.firstname+"<br>"
+myperson.lastname+"<br>"
+myperson.age+"<br>"
+myperson.eyeColor+"<br>";



var x1,x2,x3,x4,x5,x6,x7,x8;

x1=new Object();
x2=new Number();
x3=new String();
x4=new Boolean();
x5=new Array();
x6=new RegExp();
x7=new function(){};
x8=new Date();



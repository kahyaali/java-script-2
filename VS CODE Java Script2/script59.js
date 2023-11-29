

/* Get Set Super metotları ile inheritance Kullanımı */

/*
 dışarıdan class ismi yazarak metotlara ulaşamayız 
 dışarıdan class ismi ile metotlara ulaşmak istersek metodu static olarak tanımlamamız gerekmektedir



*/

var r1=document.querySelector('#result1');
var r2=document.querySelector('#result2');
var r3=document.querySelector('#result3');
var r4=document.querySelector('#result4');
var r5=document.querySelector('#result5');
var r6=document.querySelector('#result6');

class people
{
    constructor(p1,p2,p3)
    {
        this.firstname=p1;
        this.age=p2;
        this.weight=p3;
    }
    /* değişken değerlerini almak için get ifadesi kullanılır */
    get Name()
    {
        return this.firstname;
    }
    get Age()
    {
        return this.age;
    }
    get Weight()
    {
        return this.weight;
    }
    /* metot çağırarak değişken içeriğini değiştirmek için set ifadesini kullanıyoruz */
    set Name(_name)
    {
        this.firstname=_name;
    }
    set Age(_age)
    {
        this.age=_age;
    }
    set Weight(_weight)
    {
         this.weight=_weight;
    }
}

/* metotları çağırırken () parantez koymaya gerek yok fonksiyonlardaki gibi yada bizim kendimizin oluşturduğu
set get işlemlerinde ki gibi */
var p=new people();
/* burada değer ataması yapıyoruz */
p.Name='deneme5';
p.Age=40;
p.Weight=90;
/* burada değerleri çağırıyoruz */
p.Name;
p.Age;
p.Weight;

r1.innerHTML=p.Name+' '+p.Age+' '+p.Weight;

class Engineer
{
    constructor(p1,p2,p3,p4)
    {
       this.firstname=p1;
       this.lastname=p2;
       this.age=p3;
       this.weight=p4;
    }

    get FirstName()
    {
        return this.firstname;
    }
    get Age()
    {
        return this.age;
    }
    get Weight()
    {
        return this.weight;
    }
    get LastName()
    {
        return this.lastname;
    }
    /* metot çağırarak değişken içeriğini değiştirmek için set ifadesini kullanıyoruz */
    set FirstName(_fname)
    {
        this.firstname=_fname;
    }
    set Age(_age)
    {
        this.age=_age;
    }
    set Weight(_weight)
    {
         this.weight=_weight;
    }
    set LastName(_lname)
    {
        this.lastname=_lname;
    }
}

var e=new Engineer('deneme1','deneme2',25,75); /* buradaki değerler constructur'a yazılıyor */
r2.innerHTML=e.FirstName+' '+e.LastName+' '+e.Age+' '+e.Weight;

e.FirstName='deneme3';
e.LastName='deneme4';
e.Age=40;
e.Weight=90;

r3.innerHTML=e.FirstName+' '+e.LastName+' '+e.Age+' '+e.Weight;


/* Inheritance Kullanımı */

class people1
{
    constructor(p1,p2,p3)
    {
        this.firstname=p1;
        this.age=p2;
        this.weight=p3;
    }
    /* değişken değerlerini almak için get ifadesi kullanılır */
    get FirstName()
    {
        return this.firstname;
    }
    get Age()
    {
        return this.age;
    }
    get Weight()
    {
        return this.weight;
    }
    /* metot çağırarak değişken içeriğini değiştirmek için set ifadesini kullanıyoruz */
    set FirstName(_name)
    {
        this.firstname=_name;
    }
    set Age(_age)
    {
        this.age=_age;
    }
    set Weight(_weight)
    {
         this.weight=_weight;
    }
    Message()
    {
        return 'Ecmascript ile kalıtım';
    }
}


/* person1 class'nı super ile Engineer1 class'ı içine tanıtıyorum extends ile person1 class'dan genişlet diyorum yani
yukarıdaki nesneden miras al diyoruz*/
class Engineer1 extends people1
{
    constructor(p1,p2,p3,p4)
    {
       super(p1,p2,p3);
       this.lastname=p4;
    }
     /* get name get age ve get wegiht burda gerek yok person1 nesnesinden kullanacağım */
    get LastName()
    {
        return this.lastname;
    }
    /* metot çağırarak değişken içeriğini değiştirmek için set ifadesini kullanıyoruz */
    
    set LastName(_lname)
    {
        this.lastname=_lname;
    }
    /* bir üst sınıftaki metoda kalıtım yolu ile erişmek için super ifadesini kullanırız super.metot bir üst sınıfın metodunu çağırırız */
    MessageAlert()
    {
        alert(super.Message());
    }
}

var e1=new Engineer1('deneme20',30,100,'deneme21');
r4.innerHTML=e1.FirstName+' '+e1.LastName+' '+e1.Age+' '+e1.Weight;
e1.FirstName='deneme10';
e1.LastName='deneme11';
e1.Age=30;
e1.Weight=100;
e1.Message();

r5.innerHTML=e1.FirstName+' '+e1.LastName+' '+e1.Age+' '+e1.Weight+e1.Message(); /* bu şekilde çağırısam p etiketine ekler */
r5.innerHTML=e1.FirstName+' '+e1.LastName+' '+e1.Age+' '+e1.Weight+e1.MessageAlert(); /* bu şekilde çağırısam alert olarak verir */
/* get set metotları için () bunu kullanmıyor ama normal metot için () parantezleri kullanıyoruz */


/* dıaşrıdan class'lara ve class içerisindeki metotlara ulaşma */

class person{
   static  Message()
     {
        return 'Yazılım Eğitimi';
     }
}
/* class içerisindeki bir metot static ile tanımlanmamış ise class ismini yazarak o metoda ulaşamayız metodu static olarak tanımlarsak
class adını yazarak o metoda erişebiliriz */
r6.innerHTML=person.Message();

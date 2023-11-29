

/* Object Oriented - Nesne Yönelimli Programlama */

/*



*/

/* function ile nesne oluşturup işlemleri sağladık */
var r=document.querySelector('#result');

function person(par1,par2,par3)
{
    this.name=par1;
    this.age=par2;
    this.weight=par3;
    this.getname=function()
    {
        return this.name;
    }
}

var obj=new person();
obj.name='deneme1',
obj.age=30;
obj.weight=75;
obj.getname();

r.innerHTML=obj.getname();

/* class oluşturarak işlem yapma */

/* class'lar içinde metotları constructor içine yazmıyoruz dışına ayrı bir metot olarak tanımlıyoruz
tanımlarken function demiyoruz sadece metot adını yazıyoruz */

class people
{
    constructor(p1,p2,p3)
    {
        this.name=p1;
        this.age=p2;
        this.weight=p3;
    }
    /* değişken değerlerini almak için get ifadesi kullanılır */
    getname()
    {
        return this.name;
    }
    getage()
    {
        return this.age;
    }
    getweight()
    {
        return this.age,this.weight;
    }
    /* metot çağırarak değişken içeriğini değiştirmek için set ifadesini kullanıyoruz */
    setname(_name)
    {
        this.name=_name;
    }
    setage(_age)
    {
        this.age=_age;
    }
    setweight(_weight)
    {
         this.weight=_weight;
    }
}

var p=new people();
p.name='deneme3';
p.age=40;
p.weight=80;
p.getname();
p.getage();
p.getweight();
p.setname('yeni isim');
p.setage('25');
p.setweight(90);
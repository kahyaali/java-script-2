

/* object prototype kullanımı */

/*
her javascript nesnesinin bir prototype'ı vardır prototype bir nesnedir

tüm javascript nesneleri özelliklerini ve metotlarını prototypelardan devralır

bir nesne değişmez kullanarak veya new Objact() ile oluşturulan nesneler, Object.prototype adlı bir protoypetan devralır

new Date() ile oluşturulan nesneler Date.prototype öğesini devralır

Object.prototype prototype zincirinin üstündedir

javascript prototype özelliği mevcut bir prototype'e yeni özellikler eklemenize izin verir

javascript prototype özelliği mevcut bir prototype'a yeni metotlar eklemenize izin verir

sadece kendi prototypelarınızı değiştirin javascript prototypelarını değiştirmeyin

javascript nesnelerin başharflerinin büyük harfle başlamasını ister


*/

var people;

var Person=function(first,last,age,color)
{
   this.firstname=first;
   this.lastname=last;
   this.age=age;
   this.eyecolor=color;
   this.fullname=function()
   {
      return this.firstname+" "+this.lastname;
   }
}

/* Person nesnesinin prototype'ni oluşturduk ve saç rengini yellow olarak atadık burada peopel.hair='yellow gibi atama yaptık
fakat bunu people nesnesi üzerinden değil person.prototpe üzerinden yaptık farklı nesneler üretip Person.hair değişkeninede erişebilirim*/
Person.prototype.hair='yellow';

/* Person nesnesine yeni bir metot ekledik Person nesnesini oluştururken değilde prototype üzerinden Persone nesnesine dahil ettik metodu
böyle Person'dan üretilen diğer değişkenlerde bu metotu kullanabilecek */
Person.prototype.changename=function(name)
{
    return this.name=name;
}

people=new Person('deneme1','deneme2',30,'green')

document.getElementById('res1').innerHTML=people.hair;
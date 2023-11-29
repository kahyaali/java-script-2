

/*object nesneler */

var car={
    name:'mitsubishi',
    model:'cold',
    color:'red',

    /*nesnenin içinde olduğumuz için this diyebiliriz car nesnesi yerine */
    start:function()
    {
       return this.name+" "+this.model+' çalıştırıldı';
    },
    drive:function()
    {
        return this.name+" "+this.model+' kullanılıyor';
    },
    breake:function()
    {
      return this.name+" "+this.model+' frene basıldı';
    },
    stop:function()
    {
        return this.name+" "+this.model+'stop edildi';
    }
}

/*ya car diyerek nesnenin ismi ile erişiriz*/
document.getElementById('res1').innerHTML=car.start()+"<br>"
+car.drive()+"<br>"+
car.breake()+"<br>"+
car.stop(); 

document.getElementById('res2').innerHTML=car["name"]; /*car.name yada car["name"] */




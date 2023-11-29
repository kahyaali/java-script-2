

/* Json Kullanımı */

/*
JSON = verileri depolamak ve değiştirmek için kullanılan bir söz dizimidir 
bir tarayıcı ile sunucu arasında veri alışverişi yaparken veriler yalnızca metin olabilir

JSON metindir ve herhangi bir javascript nesnesini JSON'a dönüştürebilir ve JSON'u sunucuya gönderebiliriz 
sunucudan alınan JSON nesnelerini java script nesnesine dönüştürebiliriz

JSON'da veriler ad değer çifti olarak tutulur

{} parantez nesneleri [] parantez dizileri tutar

JSON'da değerler şu veri türlerinden biri olmalıdır string,number,object,array,boolean,null

JSON değerleri aşağıdaki veri türlerinden biri olamaz 
function, date,undefined

JSON'da nesneler {} süslü parantez ile tutulur json nesneleri anahtar değer çifti ile tutulur 
anahtarlar string veri türünde olmalı ve geçerli bir json veri türü(string,number,object,array,boolean veya null) olmalıdır

her bir anahtar değer çifti virgül ile ayrılır

nokta işareti kullanarak nesne değerlerine ulaşabilirsiniz



*/

var r1=document.querySelector('#result1');

let obj,obj1,obj2,sendJSON,takeJSON,txt,storageObj;
obj={
       'firstname' :'deneme1',
       'lastname' :'deneme2'
};

/* JSON gösterim süslü parantezlerde tırnak içinde kalıyor */
takeJSON='{"firstname":"deneme1","lastname":"deneme2"}'; /* değişkenleri tek tırnak ile tanımlayınca hata veriyor çift tırnak olacak */

/* javascript nesnesi olan obj nesnesini JSON metnine çevirdik */
sendJSON=JSON.stringify(obj);
window.location='json.php?Json'+sendJSON;


/* JSON metnini javascript nesnesine çevirdik */
obj1=JSON.parse(takeJSON);

r1.innerHTML=obj1.firstname+' '+obj1.lastname;

localStorage.setItem('SaklaJSON',sendJSON); /* localStorage alanına depoluyoruz */
txt=localStorage.getItem('SaklaJSON'); /* localstoragen JSON verisini aldık sakladığımız yerden */
storageObj=JSON.parse(txt); /* sonra bu JSON verisini javascript nesnesine çevirdik */

r1.innerHTML=storageObj.firstname+' '+storageObj.lastname;

obj2={
    "writes":[
         {"firstname":"deneme1","lastname":"deneme2","age":10},
         {"firstname":"deneme1","lastname":"deneme2","age":20},
         {"firstname":"deneme1","lastname":"deneme2","age":30},
         {"firstname":"deneme1","lastname":"deneme2","age":40},
         {"firstname":"deneme1","lastname":"deneme2","age":50}
    ]};



    /* JSON'da Nesne Tanımlama */

    var obj3={
        "firstname":"deneme1",
        "lastname":"deneme2",
        "age":30,
        "info":{"weight":70,"length":1.85,"hair":"yellow"}
    }

    for(var i in obj3);
    {
        r1.innerHTML+=obj3[i]; /* obj3["firstname"] gösterimi ile aynı olaydır */
    }

    r1.innerHTML+=i; /* burada i değeri bize key'leri verir firstname,lastnameve age ifadelerini verir */

    /* info içerisindeki veriye ulaşmak için */

    r1.innerHTML=obj3.info.hair; /* nesne içerisindeki nesne değerine ulaşıyoruz bu şekilde . ile ayırıyoruz */
    r1.innerHTML=obj3["info"]["weight"]; /* önerilen kullanım bu şekilde bunad . ile ayırım yok */

    for(var i in obj3)
    {
        r1.innerHTML=obj3["info"][i]; /* for ilede bu şekilde ulaşabiliriz */
    }


    /* JSON'da Dizi Tanımlama */

    var obj4={
        "firstname":"deneme1",
        "lastname":"deneme2",
        "age":30,
        "info":[10,"black","3.14","30"], /* dizi oluşturma */
        "cars":[
            {"namecar":"bmw","model":[2000,2005,2010]},
            {"namecar":"mitsubishi","model":[2000,2005,2010]},
            {"namecar":"audi","model":[2000,2005,2010]}
        ]
    }

    r1.innerHTML=obj4["info"][0]; /* dizi tanımlamasında bu şekilde ulaşıyoruz değerlere */

    for(var i in obj4)
    {
        r1.innerHTML=obj4["info"][i]; /* for ilede bu şekilde ulaşabiliriz */
    }

    for(var i in obj4)
    {
        r1.innerHTML+=obj4["cars"][i]["namecar"]; /* for ilede bu şekilde ulaşabiliriz */
        for(var j in obj4["cars"][i]["model"])
        {
            r1.innerHTML+=obj4["cars"][i]["model"][j];
        }
    }


    /* JSON ile Ajax Kullanımı */

    let tkJSON='{"firstname":"deneme1","lastname":"deneme2"}'; /* json nesnesi oluşturduk */
    let objn=JSON.parse(tkJSON); /* json metnini javascript nesnesine çevirdik */
    r1.innerHTML=objn.firstname+' '+objn.lastname;

    function run()
    {
        let xmlRqst,obj;

        xmlRqst=new XMLHttpRequest();
        /* durumda bir değişiklik var ise ajax çağrısı yapılmış demektir */
        xmlRqst.onreadystatechange =function()
        {
            if(this.readyState===4 && this.status===200) /* eğer cevap ajax'ta hazır ise 4 ve durum 200 ise 200 ok demektir */
            {
                 obj=JSON.parse(this.responseText); /* cevabı text olarak alıyoruz responseText olarak */
                 r1.innerHTML=obj["cars"][1]["namecar"];
            }
        }

        xmlRqst.open("GET","info.json",true); /* true diye async yapacağımı belirtiyorum false senkron demek */
        xmlRqst.send();
        
    }
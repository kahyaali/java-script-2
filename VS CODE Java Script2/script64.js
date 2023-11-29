

/* Promise Nesnesi */

/*
promise bir işlemin sonucunu temsil eden bir javascript nesnesidir. resolve ve reject adında iki tane parametre alır ve olumlu durumlarda resolve ile belirtilen işlemlerin,
olumsuz durumlarda rejct ile belirtilen işlemlerin yapılacağına güvence verir olumlu sonuçları then ile olumsuz sonucları catch ile yakalarız




*/


let result1=document.querySelector('#result1');
let x=5;
const pi=3.14
let res=true;

let show=new Promise(function(success,reject){
     if(res)
     {
        success();
     }
     else
     {
        reject();
     }
});

show.then(function success()
{
    result1.innerHTML=pi*x;
}).catch(function reject()
{
    result1.innerHTML=x*x;
});

/* birden fazla promise çalıştırma */

let show1=new Promise(function(success,reject){
    setTimeout(function(){
            success('İşlem Başarılı Oldu');
    },1000);
});

let show2=new Promise(function(success,reject){
    setTimeout(function(){
            reject('İşlem Başarısız Oldu');
    },2000);
});

/* show1 ve show2 bitmesini bekliyor ikiside bittikten sonra show2'deki işlem başarısız oldu diyor en son show2'deki değeri veriyor show2 en son 
promise olduğu iççin */
Promise.all([show1,show2]).then(function success(par){
    result1.innerHTML=par;
}).catch(function reject(par){
   result1.innerHTML=par;
});



/* bunda da iki promise'den hangisi önce biterse onun değerini verecektir önemli olan hangisi önce işlemi biterse */
Promise.race([show1,show2]).then(function success(par){
    result1.innerHTML=par;
}).catch(function reject(par){
   result1.innerHTML=par;
});

const promise1 = new Promise((resolve, reject) => {
    reject('BAĞLANTI HATASI');
    resolve("VERILER ALINDI");
  });
  
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });



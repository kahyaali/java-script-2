

/*object ve array sıralamarı */

/*
      
Bir arrayde max ve min değerini bulmak için diziyi sıralamak çok mantıklı bir yöntem değildir bunun için Math.max.apply yada Math.min.apply kullanabiliriz

Nesneler farklı veri türlerine sahip olsa bile diziyi sıralamak için sort() metodu kullanılabilir



*/

var arr1=[45,100,1,8,17,30,11]

/*bu şekilde rast gele sıralıyoruz */
function rastGeleSirala()
{
    arr1.sort(function(x,y){
       return 0.6-Math.random();
    });
    document.getElementById('res1').innerHTML=arr1;
}


/*bu şekilde de diziyi p etiketine yazdırmış oluyoruz */
show('res2',arr1);
function show(par1,par2)
{
    document.getElementById(par1).innerHTML=par2;
}


/*Math.max ile dizideki en büyük değeri bulabiliriz */
maxArray(arr1);
function maxArray(_max){
    // return Math.max.apply(null,_max);
    var maxdeger=  Math.max.apply(null,_max);
    document.getElementById('res3').innerHTML=maxdeger;
}


/*Math.min ile dizideki en küçük değeri bulabiliriz */
minArray(arr1);
function minArray(_min){
    // return Math.min.apply(null,_min);
   var mindeger=Math.min.apply(null,_min);
   document.getElementById('res4').innerHTML=mindeger;
}

/*dizi içerisine nesnelerde yazabiliriz */

var PC=[
    {type:'Asus',ram:'16gb',year:2016},
    {type:'hp',ram:'32gb',year:2020},
    {type:'lenovo',ram:'8gb',year:1990},
    {type:'acer',ram:'16gb',year:2005}
];

document.getElementById('res5').innerHTML=
'PC Type: '+PC[0].type+' PC Ram: '+PC[0].ram+' PC Yıl: '+PC[0].year+"<br>"
+'PC Type: '+PC[1].type+' PC Ram: '+PC[1].ram+' PC Yıl: '+PC[1].year+"<br>"
+'PC Type: '+PC[2].type+' PC Ram: '+PC[2].ram+' PC Yıl: '+PC[2].year+"<br>"
+'PC Type: '+PC[3].type+' PC Ram: '+PC[3].ram+' PC Yıl: '+PC[3].year;


sortPC();
/*yıla göre sıralama yapıyor */
function sortPC()
{
    PC.sort(function(x,y){
       return x.year-y.year;
    });
    show('res6',
    PC[0].type+'-'+PC[0].ram+'-'+PC[0].year+"<br>"
    +PC[1].type+'-'+PC[1].ram+'-'+PC[1].year+"<br>"
    +PC[2].type+'-'+PC[2].ram+'-'+PC[2].year+"<br>"
    +PC[3].type+'-'+PC[3].ram+'-'+PC[3].year);
};
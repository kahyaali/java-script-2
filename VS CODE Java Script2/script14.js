
/*Array dizilerde sıralama */
/*
  
sort() = sort() metodu bir array'i alfabetik olarak sıralar yada küçükten büyüğe doğru sıralama yapar default olarak sort() metodu değerleri stringler olarak sıralar 
rakamlar stringler olarak '2' değeri '1'den büyük olduğu için '25' '100' değerinden büyük kabul edilecektir bu nedenle sort() metodu sayıları sıralarken yanlış sonuç çıkarabilir

reverse() = reverse() metodu bir array'i tersten sıralama yapmak için kullanılır

Array'leri rast gele sıralayabiliriz bir arraydeki max ve min değerlerini bulmak için yerleşik değerler yoktur bununla birlikte bir arrayı sıraladıktan sonra 
max ve min değerleri elde etmek için dizini kullanabilirsiniz



*/


var arr1=[45,100,1,8,17,30,11];
/*küçükten büyüğe sıralıyor bu şekilde hem en büyük değeri hemde en küçük değeri bulabiliriz */
sortArrayRakam=()=>{
    arr1.sort(function(x,y)
    {
        return x-y;
    });
    document.getElementById('res1').innerHTML=arr1;
    document.getElementById('res3').innerHTML=arr1[0]; /*en küçük değer */
    document.getElementById('res4').innerHTML=arr1[arr1.length-1]; /*en büyük değeri verir */
}

/*büyükten küçüğe sıralıyor bu şekilde hem en büyük değeri hemde en küçük değeri bulabiliriz */
reverseArrayRakam=()=>{
    arr1.sort(function(x,y)
    {
        return y-x;
    });
    document.getElementById('res2').innerHTML=arr1;
}




var arr2=['edirne','kütahya','istanbul','ankara','adana'];
reverseArray=()=>{
    /*ilk önce sıralayıp sonra tersine çeviriyoruz */
    arr2.sort();
    arr2.reverse();
    document.getElementById('res5').innerHTML=arr2;
}
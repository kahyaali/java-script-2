

/* butona tıklayınca arka plan değiştirme */

/*
 m,y,m,y,m,y......... burada tek sayılar mavi çift sayılar yeşil arka plan rengi verecek
*/

var btn,result,count=0;

btn=document.querySelector('#btn');
result=document.querySelector('#result');

btn.addEventListener('click',function(){
    if(count%2==0)
    {
        result.style.background='blue';
    }
    else
    {
        result.style.background='green';
    }
    count++;
});


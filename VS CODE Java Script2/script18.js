

/*switch case kullanımı */

/*
    


*/

var day;
day="";
d=new Date().getDay();
document.getElementById('res1').innerHTML=day; /*sayısal olarak verecek gün değerini 0 ile 6 arasında */

switch(d)
{
    case 0:
        day="pazar";
        break;
        case 1:
        day="pazartesi";
        break;
        case 2:
       day="sal;"
        break;
        case 3:
        day="çarşamba";
        break;
        case 4:
        day="perşembe";
        break;
        case 5:
        day="cuma";
        break;
        case 6:
        day="cumartesi";
        break;
        default:day="böyle bir gün yok";
            break;  
}
document.getElementById('res2').innerHTML=day;
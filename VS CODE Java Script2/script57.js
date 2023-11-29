
/* Arrow Function kullanımı */

/*



*/

var result=document.querySelector('#result');

function arrow()
{
    return 'yazılım eğitimi dersleri';
}
result.innerHTML=arrow();

var arrow1=function()
{
    return 'Yazılım Eğitimleri';
}
result.innerHTML=arrow1();

let arrow2 =()=>{
  return 'Yazılım Teknolojisi Zamanı';
}
result.innerHTML=arrow2();

let arrow3 =()=> 'Eğitim Zamanı'; /* bu şekilde tek satır yazarsam return ifadesinede gerek kalmıyor */
result.innerHTML=arrow3();

/* sabit oldukları için const ile kullanma daha mantıklı */
const multi=(x,y)=>{
    return x*y;
}
result.innerHTML=multi(5,10);

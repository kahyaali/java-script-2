

/* html dm elementlerine ulaşma */

/*




*/

function getDOM()
{
    var findElement,res,message="";
    findElement=document.forms["frmDOM"];
    for(let i=0;i<findElement.length;i++)
    {
        message+=findElement[i].value;
    }
    res=document.querySelector('#result');
   // res.innerHTML=findElement.length; /* 2 döner çünkü form içinde 2 tane input nesnesi vardır */
    res.innerHTML=message;
}

alert(document.anchors.length);
alert(document.anchors[1].innerHTML); /* 4 tane a elementnin index nuamrası 1 olana eriştik */

alert(document.body.innerHTML); /* body içerisindeki şemayı verir */

alert(document.documentElement.innerHTML); /* html etiketinin şemasını verir */

alert(document.embeds.length);

alert(document.doctype.name);

alert(document.head.innerHTML);

alert(document.images.length);
alert(document.images[0].alt);
alert(document.images[1].src);

alert(document.links.length);
alert(document.links[1].innerHTML);
alert(document.links[0].href);

alert(document.scripts.length);

alert(document.title);
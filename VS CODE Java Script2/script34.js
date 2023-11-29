
/* Form elemanlarına ulaşma */

function printScreen1()
{
    /*var forms ile sayfada yer alan formlara erişiyoruz forms[0] demek birden fazla form var ise ilkine eriş demek */
     var valueForm,valueUserName,valuePassword,Result1="",Result2="",Result3="";
     Result1=document.getElementById('result1');
     Result2=document.getElementById('result2');
     Result3=document.getElementById('result3');

     /*forms ile bulup index numarası vererek ulaşırım yada direk formun name değerini yazarak erişebilirim */
     valueForm=document.forms[0].length;
     valueUserName=document.forms[0].username.value;
     valuePassword=document.forms[0].password.value;

     Result1.innerHTML='Formun eleman sayısı: '+valueForm; /*3 tane eleman var iki tane input bir tane buton elementi var */
     Result2.innerHTML='Username: '+valueUserName; /*formdaki id değeri username olan değeri getirir */
     Result3.innerHTML='Password: '+valuePassword; /*formdaki id değeri password olan değeri getirir*/
}

function printScreen2()
{
    /*var forms ile sayfada yer alan formlara erişiyoruz forms[0] demek birden fazla form var ise ilkine eriş demek */
     var valueForm,valueUserName,valuePassword,Result1="",Result2="",Result3="";
     Result1=document.getElementById('result1');
     Result2=document.getElementById('result2');
     Result3=document.getElementById('result3');
    
     /*forms ile bulup index numarası vererek ulaşırım yada direk formun name değerini yazarak erişebilirim */
     valueForm=document.frmBegin.length;
     valueUserName=document.frmBegin.username.value; /*frmBegin name formuna ulaş id'si username olan değeri getir demek */
     valuePassword=document.frmBegin.password.value; /*frmBegin name formuna ulaş id'si password olan değeri getir demek */

     Result1.innerHTML='Formun eleman sayısı: '+valueForm; /*3 tane eleman var iki tane input bir tane buton elementi var */
     Result2.innerHTML='Username: '+valueUserName; /*formdaki id değeri username olan değeri getirir */
     Result3.innerHTML='Password: '+valuePassword; /*formdaki id değeri password olan değeri getirir*/
}

function printScreen3()
{
    /*var forms ile sayfada yer alan formlara erişiyoruz forms[0] demek birden fazla form var ise ilkine eriş demek */
     var valueForm,valueUserName,valuePassword,Result1="",Result2="",Result3="";
     Result1=document.getElementById('result1');
     Result2=document.getElementById('result2');
     Result3=document.getElementById('result3');
    
     /*forms ile bulup index numarası vererek ulaşırım yada direk formun name değerini yazarak erişebilirim */
     valueForm=document.frmBegin.length;
     valueUserName=document.frmBegin.username.name; /*frmBegin name formuna ulaş id'si username olan elementin name'ni  getir demek */
     valuePassword=document.frmBegin.password.name; /*frmBegin name formuna ulaş id'si password olan elementin name'ni getir demek */

     Result1.innerHTML='Formun eleman sayısı: '+valueForm; /*3 tane eleman var iki tane input bir tane buton elementi var */
     Result2.innerHTML='Username: '+valueUserName; /*formdaki id değeri username olan değeri getirir */
     Result3.innerHTML='Password: '+valuePassword; /*formdaki id değeri password olan değeri getirir*/
}

function printScreen4()
{
    /*var forms ile sayfada yer alan formlara erişiyoruz forms[0] demek birden fazla form var ise ilkine eriş demek */
     var valueForm,valueUserName,valuePassword,Result1="",Result2="",Result3="";
     Result1=document.getElementById('result1');
     Result2=document.getElementById('result2');
     Result3=document.getElementById('result3');
    
     /*form içindeki elementlerden 0. indexli elementin name'ne eriştik*/
     valueForm=document.frmBegin.elements[0].name;
     valueUserName=document.frmBegin.elements[0].value; /*form name'i frmbegin içindeki elementlerden 0. indexli elementin değerini getirir*/
     valuePassword=document.frmBegin.password.name; /*frmBegin name formuna ulaş id'si password olan elementin name'ni getir demek */

     Result1.innerHTML='Formun eleman sayısı: '+valueForm; /*3 tane eleman var iki tane input bir tane buton elementi var */
     Result2.innerHTML='Username: '+valueUserName; /*formdaki id değeri username olan değeri getirir */
     Result3.innerHTML='Password: '+valuePassword; /*formdaki id değeri password olan değeri getirir*/
}

/*yada bu şekilde id değerleri ile erişebiliriz */
var username1=document.getElementById('username').value;
var username2=document.getElementById('username').name;

/*bu şekildede değerlere erişebiliriz */
var username3=document.forms["frmBegin"]["username"].value;
var username4=document.forms["frmBegin"]["username"].name;


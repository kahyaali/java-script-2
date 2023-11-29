

/*fonksiyonlar */

function show()
{
    document.write('beni kimse çağırmadı');

}

calculate=()=>{
    var x,y,z;
    x=5;
    y=10;
    z=x+y;
    document.write(z);
}

calculate1=(par1,par2)=>{
    this.par1=par1;
    this.par2=par2;
    let sonuc=par1+par2;
    document.getElementById('result').innerHTML="Sonuc = "+sonuc;
}

calculate2=(par1,par2)=>{
    this.par1=par1;
    this.par2=par2;
    return par1+par2;
}
document.getElementById('result').innerHTML=calculate2(10,20);


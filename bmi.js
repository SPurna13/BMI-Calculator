function cal()
{
    var height=document.getElementById("ht").value;
    var weight=document.getElementById("wt").value;
    var bmi=Math.floor((weight)/(height*height));
    if (bmi<=18.5)
    {
        document.getElementById("bm").innerHTML=bmi +" i.e "+"Thin";
    }
    else if (bmi>18.5 && bmi<25)
    {
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Normal weight";
    }
     else if(bmi>=25 && bmi<30){
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Overweight";
     }
     else{
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Obesity";
     }
}
function sub(){
    var in1=Number(document.getElementById("1").value);
    var in2=Number(document.getElementById("2").value);
    var in7=in2*0.3048;
    var in3=in1/(in7*in7);
    document.getElementById("3").innerHTML=in3;
    if(in3<=18.4){
        document.getElementById("99").innerText="Underweight";
        document.getElementById("99").style.color="red";
        }
        else if(in3>18.5 && in3<24.9){
            document.getElementById("99").innerText="Normal";
            document.getElementById("99").style.color="blue";
        }
        else if(in3>25.0 && in3<39.9){
            document.getElementById("99").innerText="Overweight";
            document.getElementById("99").style.color="green";
        }
        else if(in3>=40.0){
            document.getElementById("99").innerText="Obese";
            document.getElementById("99").style.color="yellow";
        }
        else{
            document.writeln("Error 404");
        }
}

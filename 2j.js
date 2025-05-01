function jk(){
    var in11=Number(document.getElementById("11").value);
    var in22=Number(document.getElementById("22").value);
    var in8=in22*12;
    var in33=703*(in11/(in8*in8));
    document.getElementById("33").innerHTML=in33;
    if(in33<=18.4){
        document.getElementById("99").innerText="Underweight";
        }
        else if(in33>18.5 && in33<24.9){
            document.getElementById("99").innerText="Normal";
        }
        else if(in33>25.0 && in33<39.9){
            document.getElementById("99").innerText="Overweight";
        }
        else if(in33>=40.0){
            document.getElementById("99").innerText="Obese";
        }
        else{
            document.writeln("Error 404");
        }
}

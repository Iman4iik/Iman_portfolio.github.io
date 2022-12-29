function check(){

let  num1;
num1 = document.getElementById("signup-name").value
if (num1.length <= 3){
alert("Вы неккоректно ввели данные")
}
let num2;
num2 = document.getElementById("signup-age").value
if ( num2 < 14){
    alert("Вы неккоректно ввели данные")
}
if (num2 > 30)
{
alert("Вы неккоректно ввели данные")}
}



function  yes(){
    n1 = document.getElementById("yes")
    window.location.href = "../web-raz/calc.htmL"

    
}
function no() {
    n2= document.getElementById("no")
    alert("Не студентам вход запрещен!")
}



var string = "hola mundo";
var int = 25; 
var float = 25.5;
var bool = true;
var num = 0;
let private = "solo en contexto";
const noCambia  = "constante";

var arreglo;
arreglo = ["juanito", "fabian", "saúl", "jorge", "sebas"];
//              0        1         2       3       4
var arrint =[30, 40, 66, 90, 5, 20, 60];

var suma = int + float;

console.log(arreglo[2]);

console.log(arrint[2] + arrint[3]);

for(let i =  arrint.length-1; i >= 0; i--){
    var dat = num
    num = num + arrint[i];
    if (i == 0){
        console.log ("la suma de:" + 0 + "+" + arrint[i] + " = " +  num);
    } else
    console.log("la suma de:" + dat + "+" + arrint[i] + " = " +  num);
}
console.log(arrint.length);

function show (){
    var value = document.getElementById("titulo");
    value.innerHTML = string;
    
}
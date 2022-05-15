//Realizamos operaciones
function operacion() {
var num1 = prompt("Hola. Necesitamos que ingrese 4 números para realizar operaciones sobre él.\nIngrese el número 1");
var num2 = prompt("Ingrese el número 2");
var num3 = prompt("Ingrese el número 3");
var num4 = prompt("Ingrese el número 4");
var suma = Number(num1) + Number(num2);
var resta = num2-num1;
var multiplicación = num3*num4;
var división = num4 / num1;

/*for(i=0;i<4;i++){
   var num = prompt("Por favor ingrese el número %d",num1,num2,num3,num4);
}*/

/* document.write */
let resultado = ("<br/>La suma entre "+ num1 +" y "+ num2 + " es: " + suma + "<br/>La resta entre "+ num2 + " y " + num1 + " es: "+ resta + 
"<br/>La multiplicación entre "+ num3 + " y " + num4 + " es: "  + multiplicación + 
"<br/>La división entre " + num4 + " y " + num1 + " es: " + división);

document.getElementById('juego_res').innerHTML += resultado
}

function servis(){
let servicios = ['apps ', 'web ', 'sistemas ', 'marketing ', 'diseño ']
let agregar = prompt('¿Qué quiere hacer?\n1. ¿Quiere saber la cantidad de servicios?\n2. ¿Quiere agregar otro servicio?\n3. ¿Quiere eliminar todos los servicios?\n4. ¿Quiere invertir los servicios?\n5. ¿Quiere ordenar alfabéticamente los servicios?\n')
if(agregar == 1){
    alert("Son "+servicios.length+" servicios")
}if(agregar == 2){
    let agregar = prompt('Agregar: ')
    alert(agregar+ ", " + servicios)
}if(agregar == 3){
    alert(servicios.splice(5,4))
}if(agregar == 4){
    alert(servicios.reverse())
}if(agregar == 5){
    alert(servicios.sort())
}else{
    alert('Escritura incorrecta')
}
}

function dias(){
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];  
    for(var i=0; i<7; i++) {  
    alert(dias[i]);  
    } 
}

function cambiarColor(){
    let color = document.getElementById('fondo')
    color.style.backgroundColor = '#66ff66'
    let acolor = document.querySelector('.juego').getElementsByTagName('p')
    for(var i=0; i<acolor.length; i++){
        acolor[i].style.color = '#ff0066'
    }

}
function volverColor(){
    let color = document.getElementById('fondo')
    color.style.backgroundColor = '#ffffff'
    let ocolor = document.querySelector('.juego').getElementsByTagName('p')
    for(var i=0; i<ocolor.length; i++){
        ocolor[i].style.color = '#000000'
    }
}

function crearElemento(){
    let vinculo = document.createElement("a");
    vinculo.setAttribute("href", "https://www.lipsum.com");
    let contenido = document.createTextNode("https://www.lipsum.com");
    vinculo.appendChild(contenido);
    document.getElementById('Elementoc').innerHTML = vinculo
}

function estatura(){
    let altura = prompt('Ingrese su altura: ')
    if(altura < 1.60){
        alert('Usted es bajo')
    }if( altura > 1.60 && altura < 2.30){
        alert('Usted es alto')
    }else{
        alert('Ingrese valores acordes')
    }
}

function listNece(){
var mat1 = prompt('Ingrese la primer caracaterística que agregaría:') 
var mat2 = prompt('La segunda:') 
var mat3 = prompt('La tercera:') 

var caja = document.getElementById('listNec') 
 
caja.innerHTML += '<ol><li>'+mat1+'</li><li>'+mat2+'</li><li>'+mat3+'</li></ol>' 
}
//Juego de adivinanza - Coincidir número con letra
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];


var num = Number(prompt("Por favor ingrese un número del 0 al 25")); 
var letra = prompt("Ahora ingrese una letra");


if(num<0 || num>25){
    alert("El número proporcionado no es válido");
}else{
    if (letras[num] == letra.toUpperCase()){
        alert('¡HA GANADO!');
    }else{ 
        alert('¡HA PERDIDO!');
    }
}

var square = document.getElementsByClassName('cuadro');
square[0].style.backgroundColor = '#ffffb3';
// CALCULAR EL IVA DE LOS PRECIOS. DESDE MANEJADORES DE EVENTOS SEMÁNTICOS
function solicitud() {
    var precio = Number(prompt('¿Cuál es el precio?'));
    var iva = precio * 0.21;
    var total = precio + iva;

    document.getElementById("ivas").innerHTML += 'El valor total con IVA es: $ ' + total + '<br/>El valor total sin IVA es: $ ' + precio;  
}
document.getElementById("ivajs").onclick = solicitud;
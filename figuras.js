//Codigo del perimetro de un cuadrado
console.group("cuadrados");
//const ladoCuadrado =5;
//console.log("Los Lados del Cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
 return lado * 4;   
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado (lado){
    return lado * lado;   
   }
//console.log("El area del cuadrado es: " + areatroCuadrado + "cm² ");

console.groupEnd();

//codigo del triangulo
console.group("triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo  = 4;
//const alturaTriangulo = 5.5;

//console.log(
 // "Los Lados del triangulo miden: " 
 //   + ladoTriangulo1 
 //   + "cm",
 //   + ladoTriangulo2 
 //  + "cm",
 //   + baseTriangulo 
  //  + "cm"
   // );
    //console.log("La altura del triangulo es de: " + alturaTriangulo+ "cm");
    
    function perimetroTriangulo(lado1,lado2, base){
     return lado1 + lado2 + base;
    }
  
    //console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm ");
    
    function areaTraingulo(base, altura){
    return (base * altura)/2;
    } 
    //console.log("El area del triangulo es: " + areaTraingulo + "cm² ");
    console.groupEnd();


//codigo del circulo
console.group("circulos");
//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm ");

//Diametro
function diametroCirculo(radio){
return radio * 2;
}


//PI
const PI = Math.PI;
console.log("el valor de PI es: " + PI );

//Circunsferencia
function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}

//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//area
function areaCirculo(radio){
return (radio * radio) * PI;
} 
//console.log("El area del circulo es: " + areaCirculo + "cm² ");

console.groupEnd();


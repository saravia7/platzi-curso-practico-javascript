// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoA, ladoB, baseT) {
  return ladoA + ladoB + baseT;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

//triangulo isosceles-altura
function alturaTriangulo(a, b, base){
  if(a == b){
      
      return Math.sqrt(Math.pow(a,2) - Math.pow(base/2,2));
  }
  else{
      console.error("los lados a y b no son iguales");
      return "el triángulo no es isósceles";
  }

}
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//triangulo perimetro,area y altura
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("InputLado1");
  const lado1 = input1.value;
  const input2 = document.getElementById("InputLado2");
  const lado2 = input2.value;
  const input3 = document.getElementById("InputBase");
  const base = input3.value;
  
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert("El Perimetro del triangulo es:" + perimetro);

}

function calcularAreaTriangulo(){
  const input4 =document.getElementById("InputAltura");
  const altura = input4.value;
  const input3 = document.getElementById("InputBase");
  const base = input3.value;

  const area = areaTriangulo(altura, base);
  alert("El area del triangulo es: " + area);


}

function calcularAlturaTriangulo(){
  const input1 = document.getElementById("InputLado1");
  const lado1 = input1.value;
  const input2 = document.getElementById("InputLado2");
  const lado2 = input2.value;
  const input3 = document.getElementById("InputBase");
  const base = input3.value;
  const altura = alturaTriangulo(lado1, lado2, base);
  alert("La altura es de: " + altura);
} 


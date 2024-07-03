/*
Primitivos (imutaveis) - string, Number, boolean, undefined,
null (bigint, symbol) - valor

Referência (mutável) - array, object, fuction
*/

//valore primitivo
/*let a = 1;
let b = a;
console.log(a, b)
a = 2
console.log(a,b)
*/

//valor por referência
let a =[1,2,3];
let b = a; // let b = [...a] //isso copia o valor de a
let c = b;
console.log(a,b)
a.push(4)
console.log(a,b)
b.pop()
console.log(a,b)
a.push('luiz')
console.log(c)
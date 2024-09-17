/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

let a = 10;
let b = 3;
let c = 10;

let i = a + b;
console.log(i);

i = a - b;
console.log(i);

i = a * b;
console.log(i);

i = a / b;
console.log(i);

i = a % b;
console.log(i);

i = a ** b;
console.log(i);

b++;
console.log(b);

c--
console.log(c);



// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

c = 2
console.log(c)

c+= 3
console.log(c)

c -= 2
console.log(c)

c *= 2
console.log(c)

c /= 2
console.log(c)

c=4
c %= 2
console.log(c)

c=10
c **= 2 
console.log(c)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación


console.log( 10 == '10' )
console.log( 10 >= 9 )
console.log( 10 <= 11 )
console.log( 10 != 9  )
console.log( 10 === 10  )


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( 10 === '10' )
console.log( 10 < 9 )
console.log( 10 >= 11 )
console.log( 10 == 9  )
console.log( 10 != 10  )

// 5. Utiliza el operador lógico and

a=1
b=2
c=3

console.log(a < b && a < c)
console.log(a < b && a > c)


// 6. Utiliza el operador lógico or

console.log(a < b || a > c)
console.log(a < b || a < c)
console.log(a > b || a > c)

// 7. Combina ambos operadores lógicos

console.log(a < b || a > c)

// 8. Añade alguna negación
console.log(a < b && !(a < c))

// 9. Utiliza el operador ternario

console.log( a > b ? "a es mayor que b" : "a es menor que b" )

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log( !(a+b > a+c) && b+c > b+a )

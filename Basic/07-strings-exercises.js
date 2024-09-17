/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

myString1= "Hola, "
myString2= "Jhonnatan"

myString= myString1 + myString2

console.log(myString1)
console.log(myString2)
console.log(myString)


// 2. Muestra la longitud de una cadena de texto

console.log(myString.length)

// 3. Muestra el primer y último carácter de un string

i= myString.length
console.log(myString) 
console.log(myString[0]) //primer caracter
console.log(myString[i-1]) // último carácter

// 4. Convierte a mayúsculas y minúsculas un string

console.log(myString.toUpperCase())
console.log(myString.toLowerCase())


// 5. Crea una cadena de texto en varias líneas

myString1 = `hola
soy
jhonnatan`

             console.log(myString1)

// 6. Interpola el valor de una variable en un string

myEmail ="jonanobtc@gmail.com"
console.log(`my email is ${myEmail}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
myString2 =`my email is ${myEmail}`
myString3 = myString2.replace(/ /g, "-")
console.log(myString3)



// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(myString3.includes("email"))

// 9. Comprueba si dos strings son iguales

    myString = "hola"
    myString2 = "Hola"

    console.log(myString == myString2)

    myString = "hola"
    myString2 = "hola"

    console.log(myString == myString2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myString.length)
    console.log(myString2.length)
    console.log(myString.length == myString2.length)

    myString2 = "mas largo"
    console.log(myString.length)
    console.log(myString2.length)
    console.log(myString.length == myString2.length)
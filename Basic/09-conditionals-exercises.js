/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let myAge = 17
    let myName = "Jhonnatan"
    if (myAge >= 18){
        console.log(myName)
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let myUsername = "jonano"
    let myPassword = "12345678"

    if (myUsername == "jonano" && myPassword == "12345678") {
        console.log("usuario y contraseña correctos")
    }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    let mynumber = -10
    if (mynumber == 0) {
        console.log("el número es cero")
    } else if (mynumber < 0) {
        console.log("el número es negativo")
    } else {
        console.log("el número es positivo")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let voterAge = 15
    if (voterAge >= 18) {
        console.log("puedes votar")
    } else {
        let faltan = 18 - voterAge
        console.log("no puedes votar, aun te faltan " + faltan + " años")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 


    const message = myAge >= 18 ? "adulto" : "menor"
    console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de  una variable "mes"

/*  1 de marzo (primavera), 
    el 1 de junio (verano), 
    el 1 de septiembre (otoño) 
    el 1 de diciembre (invierno). 
*/

    let month = 9
    if (month >=3 && month <=5 ){
        console.log("La estacion es primavera")
    } else if (month >=6 && month <=8 ) {
        console.log("La estacion es verano")
    } else if (month >=9 && month <=11 ) {
        console.log("La estacion es otoño")
    } else {
        console.log("La estacion es invierno")
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
/*  Enero: 31 días.
    Febrero: 28 o 29 días (si es año bisiesto)
    Marzo: 31 días.
    Abril: 30 días.
    Mayo: 31 días.
    Junio: 30 días.
    Julio: 31 días.
    Agosto: 31 días.
    Septiembre: 30 días
    Octubre: 31 días
    Noviembre: 30 días
    Diciembre: 31 días
*/
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        console.log("El mes tiene 31 dias")
    } else if (month == 2) {
        console.log("El mes tiene 28 dias y si es año bisiesto tiene 29 dias")
    } else {
        console.log("El mes tiene 30 dias")
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

    let language = "italiano"
    switch (language) {
        case "español":
            console.log("Hola mundo")
            break
        case "ingles":
            console.log("Hello world")
            break
        case "aleman":
            console.log("Hallo welt")
            break
        case "frances":
            console.log("Bonjour le monde")
            break
        case "italiano":
            console.log("Ciao mondo")
            break
        default:
            console.log("No se reconoce el idioma")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6
    console.log(month)
    switch (month){
        case (3 || 4 || 5):
            console.log("la estacion es primavera")
            break
        case (6 || 7 || 8):
            console.log("la estacion es verano")
            break
        case (9 || 10 || 11):
            console.log("la estacion es otoño")
            break
        default:
            console.log("la estacion es invierno")
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month){
    case (1 || 3 || 5 || 7 || 8 || 10 || 12):
        console.log("El mes tiene 31 dias")
        break
    case 2:
        console.log("El mes tiene 28 dias y si es año bisiesto tiene 29 dias")
        break
    default:
        console.log("El mes tiene 30 dias")

}
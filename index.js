alert("A continuación se le pediran cinco números para ordenar de menor a mayor")
//FUNCION
function intercambio(a) {
    if (a == 1) {
        let aux = a2
        a2 = a1
        a1 = aux
    } else if (a == 2) {
        let aux = a3
        a3 = a2
        a2 = aux
    } else if (a == 3) {
        let aux = a4
        a4 = a3
        a3 = aux
    } else if (a == 4) {
        let aux = a5
        a5 = a4
        a4 = aux

    }
}
//VARIABLES
let a1 = Number(prompt("Ingrese un número"))
let a2 = Number(prompt("Ingrese un número"))
let a3 = Number(prompt("Ingrese un número"))
let a4 = Number(prompt("Ingrese un número"))
let a5 = Number(prompt("Ingrese un número"))
//ITINERACION
for (i = 0; i < 5; i++) {

    if (a1 > a2) {
        intercambio(1)
    }
    if (a2 > a3) {
        intercambio(2)
    }
    if (a3 > a4) {
        intercambio(3)
    }
    if (a4 > a5) {
        intercambio(4)
    }
}
//RESULTADO
alert("Sus números ordenados de menor a mayor son " + a1 + " < " + a2 + " < " + a3 + " < " + a4 + " < " + a5)


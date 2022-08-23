//serTimeout 
//ejecutar codigo luego de un numero especifico de ms
//1 seg= 1000 milisegundos
//setTimeout(funcion,retraso,argumento)
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`);
// }
// setTimeout(mostrarTema,1000,'Node.js')

// function sumar(a,b){
//     console.log(a + b)
// }
// setTimeout(sumar,4000,6,8)

// setImmediate(funcion,argumento1,argumento2)
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
// }
// console.log("Antes de setImmendiate()")
// setImmediate(mostrarTema,'Node.js')
// console.log("Despues de setImmendiate()")

// setInterval()
// ejecutar un codigo un numero infinito de veces con
// un retraso especifico de milisegundos
// setInterval(funcion,intervalo,argumento1,argumento2)

// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`)
// }
// setInterval(mostrarTema,5000,'Node.js')

function sumar(a,b){
    console.log(a+b)
}

setInterval(sumar,2000,6,5)

const fs=require('fs');
//metodo para acceder al contenido de un archivo
// fs.readFile('index.html','utf-8',(err,contenido)=>{
// if (err){
    //el codigo se sigue ejecutando
//     console.log(err)
// }
// else{
//     console.log(contenido)
// }
// console.log('Mensaje...')}

// )

// fs.readFile('index.html','utf-8',(err,contenido)=>{
//     if (err){
    // termina la ejecucion del programa
        // throw err
    // }
    // else{
    //     console.log(contenido)
    // }
    // })

// cambiar el nombre de un archivo

fs.rename('index.html','main.html',(err)=>{
if (err){
    throw err;
}
console.log('Nombre cambiado exitosamente')
})
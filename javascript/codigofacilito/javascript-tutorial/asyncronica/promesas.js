// let request = require("request");
// //https://www.npmjs.com/package/request

// let promesa = request("http://www.google.com" );
// promesa.then(function() {console.log('yo soy la peticion')})  
// promesa.catch(function(err){console.error('hubo un error')})

// console.log('termino de la peticion');


let promesa1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Hola desde la promesa 1');
    }, 2000);
});


promesa1.then((e) => {console.log(e);})
.catch(function(err){console.error('hubo un error') }); 

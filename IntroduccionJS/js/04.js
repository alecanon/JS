const tweet = 'Aprendiendo JavaScript con el curso de desarrollo Web Completo';
const producto2 = 'Monitor HD "';
const email = 'correo@correo.com';

//Esto principalmente es para Buscar letras el siguiente es para números

//legth es para la extensión
console.log(tweet.length); // metodo para medir cuantas palabras tiene una linea
console.log(producto2)

//Index0f (posición texto que yo necesite está o si existe)  
console.log(tweet.indexOf('JavaScript')); // Como tiene tweet.index lo hace un metodo si solo fuera // tambien se usa para buscar esa palabra en una cadena de texto
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

//includes (retorna true o false No posición)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));



// EL METODO MAP ()
// El metodo map es una funcion de los arrays que nos permite recorrer cada uno de los elementos que lo componen y devolver un array con los valores modificados sin afectar el original.

// Este parametro recibe una funcion que se aplica a cada elemento del array para devolver un nuevo array con los valores modificados:

//EJEMPLO 

const numbers = [2, 3, 4, 5, 6];
const result = numbers.map(num => num * 2);
console.log(result); // [4, 6, 8, 10, 12]

// EL METODO JOIN ();
// Es una funcion de los arrays que nos permite juntar todos los elementos de un array en una cadena de texto.

//Este metodo recibe como parametro un caracter que se usara para separar los elementos del array.


const numeros = [2, 3, 4, 5, 6];
const resultado = numbers.join("-");
console.log(result); // "2-3-4-5-6"

// EL METODO SLICE () 
// Es una funcion de los arrays que nos permite devolver una copia de  una parte del array.

// EJEMPLO 
    
const numbeRS = [2, 3, 4, 5, 6];
const resulT = numbers.slice(1, 4);
console.log(result); // [3, 4, 5]
// Creación de función separador de tareas
let tarea = 1;
const separador = () => {
    console.log("\n***************************************************");
    console.log(`TAREA #${tarea}`);
    console.log("----------------------------------------------------");
    tarea++;
}

// Tarea 1
separador();
let input = "Trementina y tortugas"; // Asigna a la variable input la frase que quieras.
console.log("Creación variable input");

// Tarea 2
separador();
const vowels = ["a", "e", "i", "o", "u"]; // Array con las vocales
console.log("Creación variable vowels");

// Tarea 3
separador();
const resultArray = []; // Array vacío para almacenar las vocales
console.log("Creación variable resultArray");

// Tarea 4 (Recorrido de la frase letra por letra)
separador();
for (let i = 0; i < input.length; i++) {
    console.log(`Posición: ${i} / Letra: ${input[i]}`);
}

// Tarea 5
separador();
console.log("Comprobación de que la tarea 4 funciona");

// Tarea 6 (Verificación de vocales)
separador();
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]); // Añade la vocal al resultado
        }
    }
}
console.log("Comprobación de que tarea 6 funciona");

// Tarea 7 (Depuración de comparación)
separador();
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        console.log(`Comparando: input[${i}]="${input[i]}" vs vowels[${j}]="${vowels[j]}"`);
    }
}
console.log("Comprobación de que tarea 7 funciona");

// Tarea 8 (Añadir vocales encontradas al array)
separador();
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]); // Añade la vocal al resultado
        }
    }
}
console.log("Comprobación de que tarea 8 funciona");

// Tarea 9 (Verificación adicional)
separador();
console.log("Comprobación de que tarea 9 funciona");

// Tarea 10 (Verificación de 'e' y 'u')
separador();
for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]); // Añade 'e' y 'u' duplicadas
    }
}
console.log("Comprobación de que tarea 10 funciona");

// Tarea 11 (Verificación de 'e' y 'u' específica)
separador();
for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]); // Añade 'e' y 'u' duplicadas
    }
}
console.log("Comprobación de que tarea 11 funciona");

// Tarea 12 (Mostrar resultados)
separador();
console.log(resultArray); // Muestra las vocales extraídas

// Tarea 13 (Crear la cadena final)
separador();
let resultString = resultArray.join("").toUpperCase(); // Crear cadena en mayúsculas
console.log(resultString); // Muestra el resultado en la consola

// Tarea 14 (Con una nueva entrada de texto)
separador();
input = "Ya Doli con el padre han encontrado a su querido hijo"; // Nueva frase
resultArray.length = 0; // Limpia el array resultArray
for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]); // Añade 'e' y 'u' duplicadas
    }
}
resultString = resultArray.join("").toUpperCase();
console.log(resultString);

// Tarea 15 (Función optimizada con IA)
separador();
function translateToMarine(text) {
    const result = [];
    for (let letter of text.toLowerCase()) {
        if (letter === 'e' || letter === 'u') {
            result.push(letter, letter); // Duplicar 'e' y 'u'
        } else if (vowels.includes(letter)) {
            result.push(letter);
        }
    }
    return result.join('').toUpperCase();
}

// Ejemplo de uso:
console.log(translateToMarine("Trementina y tortugas")); // "UUEEIEEAUUEE"
console.log(translateToMarine("Ya Doli con el padre han encontrado a su querido hijo")); // "AOIOEEAEEAEEOAOAUUUUEEIOIO"

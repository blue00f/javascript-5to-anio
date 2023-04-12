/*
    Diccionario 
*/

let persona={}; // Diccionario
let personas=[]; // Vector que va a guardar varios diccionarios
let i;

persona['nombre'];
persona['apellido'];
persona['edad'];

for(i=0; i<2; i++){
    persona.nombre=prompt(`Ingresa un nombre`);
    persona.apellido=prompt(`Ingresa un apellido`);
    persona.edad=prompt(`Ingresa una edad`);

    personas.push(
        {
        'nombre':persona.nombre,
        'apellido':persona.apellido,
        'edad':persona.edad
        }
    );
}
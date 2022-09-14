const nombre = document.getElementById('nombre');
const monto = document.getElementById('monto');
const agregar = document.getElementById('agregar');
const ul = document.getElementById('lista');
const total = document.getElementById('total');
const importePorPersona = document.getElementById('importePorPersona');
let montosArreglo = [];

function enviar(){
    const dinero = monto.value;
    const persona = nombre.value;
    let suma = 0;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `${persona}:  $${dinero}`;
    montosArreglo.push(dinero);
    for (const monto of montosArreglo) {
        suma += (parseFloat(monto));
    }
    let promedio = suma / montosArreglo.length;

    total.textContent = `Total: ${suma.toFixed(2)}`;
    
    importePorPersona.textContent = `A cada uno le toca aportar ${promedio.toFixed(2)}`

    li.appendChild(p)
    ul.appendChild(li)

    nombre.value = '';
    monto.value = '';

}
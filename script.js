function mostrarSeccion(seccion) {
    document.getElementById('seccion-agregar').classList.add('hidden');
    document.getElementById('seccion-buscar').classList.add('hidden');
    document.getElementById('seccion-listar').classList.add('hidden');
    document.getElementById(`seccion-${seccion}`).classList.remove('hidden');
}

document.getElementById('form-agregar').addEventListener('submit', function(e) {
    e.preventDefault();
    const persona = {
        id: document.getElementById('id').value,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value
    };

    let personas = JSON.parse(localStorage.getItem('personas')) || [];
    personas.push(persona);
    localStorage.setItem('personas', JSON.stringify(personas));
    alert('Persona guardada exitosamente');
    this.reset();
});

function buscarPersona() {
    const criterio = document.getElementById('criterio').value;
    const valor = document.getElementById('busqueda').value.toLowerCase();
    const personas = JSON.parse(localStorage.getItem('personas')) || [];

    const resultados = personas.filter(p => p[criterio].toLowerCase().includes(valor));

    let html = resultados.length ? '<table border="1"><tr><th>Documento</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>' : 'No se encontraron resultados.';

    resultados.forEach(p => {
        html += `<tr><td>${p.id}</td><td>${p.nombre}</td><td>${p.apellido}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>`;
    });

    if (resultados.length) html += '</table>';

    document.getElementById('resultado-busqueda').innerHTML = html;
}

function listarPersonas() {
    const personas = JSON.parse(localStorage.getItem('personas')) || [];

    let html = '<table border="1"><tr><th>Documento</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>';

    personas.forEach(p => {
        html += `<tr><td>${p.id}</td><td>${p.nombre}</td><td>${p.apellido}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>`;
    });

    html += '</table>';

    document.getElementById('lista-personas').innerHTML = html;
}
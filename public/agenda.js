// Función para guardar (usando Fetch en lugar de submit directo para mostrar la alerta)
async function enviarFormulario() {
    const data = {
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        descripcion: document.getElementById('descripcion').value,
        oldFecha: document.getElementById('oldFecha').value,
        oldHora: document.getElementById('oldHora').value
    };

    if(!data.fecha || !data.hora || !data.descripcion) {
        Swal.fire('Error', 'Por favor llena todos los campos', 'error');
        return;
    }

    const res = await fetch('/guardar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });

    if (res.ok) {
        Swal.fire({
            title: '¡Logrado!',
            text: 'El evento se guardó correctamente',
            icon: 'success',
            confirmButtonColor: '#28a745'
        });
        resetForm();
        cargar();
    }
}

async function cargar() {
    const res = await fetch('/listar-eventos');
    const eventos = await res.json();
    const lista = document.getElementById('lista-eventos');
    lista.innerHTML = '';

    eventos.forEach(ev => {
        const div = document.createElement('div');
        div.className = 'evento-item';
        div.innerHTML = `
            <div>
                <strong>${ev.fecha}</strong> | <strong>${ev.hora}</strong>
                <p style="margin:5px 0 0 0; color:#666;">${ev.descripcion}</p>
            </div>
            <div>
                <button class="btn-edit" onclick="editar('${ev.fecha}', '${ev.hora}', '${ev.descripcion}')">Editar</button>
                <button class="btn-delete" onclick="eliminar('${ev.fecha}', '${ev.hora}')">Eliminar</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function editar(f, h, d) {
    document.getElementById('fecha').value = f;
    document.getElementById('hora').value = h;
    document.getElementById('descripcion').value = d;
    document.getElementById('oldFecha').value = f;
    document.getElementById('oldHora').value = h;
    document.getElementById('title').innerText = "Editar Evento";
    document.getElementById('btn-submit').innerText = "Actualizar Evento";
    document.getElementById('btn-cancel').style.display = "block";
}

// NUEVA FUNCIÓN DE ELIMINAR "BONITA"
function eliminar(fecha, hora) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await fetch('/eliminar', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fecha, hora})
            });
            Swal.fire('¡Eliminado!', 'El evento ha sido borrado.', 'success');
            cargar();
        }
    });
}

function resetForm() {
    document.getElementById('form-agenda').reset();
    document.getElementById('oldFecha').value = "";
    document.getElementById('oldHora').value = "";
    document.getElementById('title').innerText = "Nuevo Evento";
    document.getElementById('btn-submit').innerText = "Guardar Evento";
    document.getElementById('btn-cancel').style.display = "none";
}

cargar();
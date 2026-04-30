const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * RUTA: Guardar o Actualizar Evento
 * Si recibe oldFecha y oldHora, elimina el archivo anterior antes de crear el nuevo.
 */
app.post('/guardar', (req, res) => {
    const { fecha, hora, descripcion, oldFecha, oldHora } = req.body;

    // LÓGICA DE EDICIÓN: Evitar duplicados
    if (oldFecha && oldHora) {
        const oldFolderName = oldFecha.replace(/-/g, '.');
        const oldFileName = `${oldHora.replace(':', '.')}.md`;
        const oldPath = path.join(__dirname, 'agenda', oldFolderName, oldFileName);

        if (fs.existsSync(oldPath)) {
            fs.unlinkSync(oldPath);
            // Si la carpeta quedó vacía, la eliminamos
            const oldDir = path.dirname(oldPath);
            if (fs.readdirSync(oldDir).length === 0) {
                fs.rmdirSync(oldDir);
            }
        }
    }

    // GUARDAR NUEVO (O ACTUALIZADO)
    const folderName = fecha.replace(/-/g, '.');
    const folderPath = path.join(__dirname, 'agenda', folderName);
    
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const fileName = `${hora.replace(':', '.')}.md`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFileSync(filePath, descripcion, 'utf8');
    
    res.status(200).json({ success: true });
});

/**
 * RUTA: Listar Eventos para el Frontend
 */
app.get('/listar-eventos', (req, res) => {
    const agendaPath = path.join(__dirname, 'agenda');
    if (!fs.existsSync(agendaPath)) return res.json([]);

    let eventos = [];
    const carpetasFechas = fs.readdirSync(agendaPath);

    carpetasFechas.forEach(folder => {
        const fullPath = path.join(agendaPath, folder);
        if (fs.lstatSync(fullPath).isDirectory()) {
            const archivos = fs.readdirSync(fullPath);
            archivos.forEach(file => {
                const contenido = fs.readFileSync(path.join(fullPath, file), 'utf8');
                eventos.push({
                    fecha: folder.replace(/\./g, '-'),
                    hora: file.replace('.md', '').replace('.', ':'),
                    descripcion: contenido
                });
            });
        }
    });
    res.json(eventos);
});

/**
 * RUTA: Eliminar Evento
 */
app.post('/eliminar', (req, res) => {
    const { fecha, hora } = req.body;
    const filePath = path.join(__dirname, 'agenda', fecha.replace(/-/g, '.'), `${hora.replace(':', '.')}.md`);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        const folderPath = path.dirname(filePath);
        if (fs.readdirSync(folderPath).length === 0) {
            fs.rmdirSync(folderPath);
        }
    }
    res.json({ success: true });
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
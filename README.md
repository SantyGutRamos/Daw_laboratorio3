Sistema de Agenda Personal - Laboratorio 03

Aplicación web backend desarrollada con Node.js y Express que permite gestionar una agenda personal mediante la creación, lectura, edición y eliminación de eventos, utilizando el sistema de archivos local como mecanismo de persistencia.

Descripción del Proyecto

Este proyecto implementa una aplicación web que permite registrar y visualizar eventos organizados por fecha y hora. Los datos se almacenan en archivos Markdown (.md) dentro de una estructura jerárquica de carpetas.

El sistema cumple con los requerimientos del laboratorio, haciendo uso de:

Node.js como entorno de ejecución
Express para la gestión del servidor y rutas
Módulo fs para la manipulación del sistema de archivos
Métodos HTTP (GET y POST) para la interacción cliente-servidor

La aplicación es accesible desde el navegador en una única interfaz.

Características
Gestión completa de eventos:
Crear eventos
Listar eventos
Editar eventos
Eliminar eventos
Persistencia en archivos Markdown (.md)

Organización jerárquica de datos:

agenda/
├── YYYY.MM.DD/
    ├── HH.MM.md
Uso de rutas HTTP:
GET → Visualización de la agenda
POST → Registro y modificación de eventos
Interfaz web accesible desde navegador
Requisitos Previos

Asegúrate de tener instalado:

Node.js (versión 18 o superior)
Docker
Git

Verificar instalación:

node -v
npm -v
docker -v
git --version
Instalación y Ejecución Local
Clonar el repositorio:
git clone https://github.com/SantyGutRamos/Daw_laboratorio2
cd Daw_laboratorio2
Instalar dependencias:
npm install
Ejecutar la aplicación:
node app.js

O usando script:

npm start
Acceder desde el navegador:
http://127.0.0.1:8080/lab03/

o

http://localhost:8080/lab03/
Despliegue con Docker
1. Construcción de la imagen
docker build -t daw_lab03 .
2. Ejecución del contenedor
docker run -d -p 8080:3000 --name daw_lab03_contenedor daw_lab03
3. Acceso a la aplicación

Abrir en navegador:

http://localhost:8080/lab03/
Estructura del Proyecto
lab03/
├── agenda/              # Almacenamiento de eventos en archivos Markdown
├── public/              # Archivos estáticos (HTML, CSS, JS)
├── app.js               # Servidor principal (Node.js + Express)
├── Dockerfile           # Configuración de contenedor
├── package.json         # Dependencias del proyecto
└── README.md            # Documentación
Funcionamiento del Sistema
Los eventos se almacenan en archivos .md
Cada carpeta representa una fecha (YYYY.MM.DD)
Cada archivo representa un evento con su hora (HH.MM.md)
El servidor:
Crea carpetas automáticamente si no existen
Guarda archivos con contenido del evento
Lee directorios para listar eventos
Permite modificar y eliminar archivos

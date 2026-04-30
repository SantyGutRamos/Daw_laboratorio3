# Agenda de Eventos - Laboratorio 03

Aplicación web desarrollada con Node.js y Express que permite gestionar una agenda de eventos personales, organizándolos y almacenándolos de forma persistente en el sistema de archivos del servidor.

---

## Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Ejecución Local](#instalación-y-ejecución-local)
- [Despliegue con Docker](#despliegue-con-docker)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionamiento del Sistema](#funcionamiento-del-sistema)
- [Entregables](#entregables)
- [Cuestionario](#cuestionario)

---

## Descripción del Proyecto

Este sistema implementa una aplicación web que permite la gestión de una agenda personal mediante una única interfaz accesible desde el navegador.

El backend, desarrollado con Node.js y Express, procesa las solicitudes del cliente y gestiona la información utilizando el sistema de archivos local. Los eventos se almacenan en archivos Markdown (`.md`), organizados jerárquicamente por fecha y hora.

---

## Características

- Gestión completa de eventos: creación, lectura, edición y eliminación.
- Uso de métodos HTTP (GET y POST).
- Persistencia mediante el sistema de archivos (`fs`).
- Almacenamiento en formato Markdown (`.md`).
- Organización jerárquica por fecha.
- Interfaz web accesible desde navegador.
- Despliegue con Docker.

---

## Requisitos Previos

- Node.js (versión 18 o superior recomendada)
- npm
- Docker (opcional)

Verificación:

```bash
node -v
npm -v
docker -v
```

---

## Instalación y Ejecución Local

1. Clonar el repositorio:

```bash
git clone https://github.com/SantyGutRamos/Daw_laboratorio2
cd Daw_laboratorio2
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
node app.js
```

O:

```bash
npm start
```

4. Acceder desde el navegador:

```
http://127.0.0.1:8080/lab03
```

---

## Despliegue con Docker

1. Construir la imagen:

```bash
docker build -t daw_lab03 .
```

2. Ejecutar el contenedor:

```bash
docker run -d -p 8080:3000 --name daw_lab03_contenedor daw_lab03
```

3. Acceder a la aplicación:

```
http://127.0.0.1:8080/lab03
```

---

## Estructura del Proyecto

```
lab03/
├── agenda/
├── public/
├── app.js
├── Dockerfile
├── package.json
└── README.md
```

---

## Funcionamiento del Sistema

Estructura de almacenamiento:

```
agenda/
└── YYYY.MM.DD/
    ├── HH.MM.md
```

- Cada carpeta representa una fecha.
- Cada archivo representa un evento.
- El sistema crea automáticamente directorios y archivos.
- Permite leer, editar y eliminar eventos.

---


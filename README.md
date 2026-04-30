# Agenda de Eventos - Laboratorio 03

Aplicación web desarrollada con Node.js y Express que permite gestionar una agenda de eventos personales, organizándolos y almacenándolos de forma persistente en el sistema de archivos del servidor.

## Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Ejecución Local](#instalación-y-ejecución-local)
- [Despliegue con Docker](#despliegue-con-docker)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Autores](#autores)

---

## Descripción del Proyecto

Este sistema proporciona una interfaz web en la que los usuarios pueden crear, editar, eliminar y visualizar eventos organizados por fechas. El servidor utiliza un backend basado en Node.js que procesa y organiza la información en el disco en archivos Markdown, manteniendo un registro histórico consistente y ordenado.

---

## Características

- **Gestión completa de eventos:** Creación, lectura, actualización y eliminación de tareas o recordatorios.
- **Vistas dinámicas:** Dos vistas en la misma página (Vista de Lista agrupada y Vista Estructura/Calendario).
- **Navegación mensual:** Permite navegar entre diferentes meses desde el calendario.
- **Persistencia en disco:** Uso del sistema de archivos para almacenar los datos en formato Markdown.
- **Alertas interactivas:** Integración con SweetAlert2 para una mejor experiencia de usuario.

---

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Docker](https://www.docker.com/) (opcional, para el despliegue en contenedores)

---

## Instalación y Ejecución Local

1. Clona o descarga el repositorio en tu máquina local.
2. Abre la terminal en la raíz del proyecto e instala las dependencias:

```bash
npm install
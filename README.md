# Instrucciones de Configuración

## Clonar el Repositorio

1. Clona este repositorio a tu máquina local usando el siguiente comando:

git clone <url_del_repositorio>


## Instalar Dependencias del Servidor

2. Abre tu terminal y navega hasta la carpeta del servidor (`server`) usando el siguiente comando:

cd server

3. Instala las dependencias del servidor ejecutando el siguiente comando:

npm install


## Configurar Base de Datos (Postgres)

4. Si estás utilizando PostgreSQL, accede a tu shell de PostgreSQL y ejecuta el siguiente comando para crear la base de datos:

CREATE DATABASE <nombre_de_la_base_de_datos>;

## Configurar Variables de Entorno

5. Crea un archivo `.env` en la raíz de la carpeta del servidor (`server`) y define las siguientes variables de entorno:

DB_USER=<usuario_de_la_base_de_datos>
DB_PASSWORD=<tu_contraseña>
DB_NAME=<nombre_de_la_base_de_datos>
DB_HOST=localhost
PORT=3001


## Iniciar el Servidor

6. Una vez que hayas completado todos los pasos anteriores, inicia el servidor ejecutando el siguiente comando:

npm start

¡Listo! Ahora tu servidor debería estar en funcionamiento correctamente.


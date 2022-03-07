# Instalar y correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1.-     En la carpeta root de la aplicacion correr: npm install
2.-     Navega al directorio front y vuelve a correr el comando: npm install
        Regresa al directorio root cd ...
3.-     ES NECESARIO CONTAR CON EL ARCHIVO .env EN LA CARPETA ROOT DE LA APLICACIÓN, ESTE ARCHIVO CONTIENEN 
        NUESTRAS VARIABLES DE ENTORNO, SI NO SE CUENTA CON EL ARCHIVO NO CORRERÁ LA APLICACIÓN LOCALMENTE. 
4.-     La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA).       Todo está configurado para correr con un solo comando

        npm run dev

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.




## Importar data desde seeder (opcional)
La data se encuentrá de manera "local" en la carpeta backend, de igual manera se encuentra en una cloud de mongo que al correr los seeder se importan o destruyen los datos, según se necesite.





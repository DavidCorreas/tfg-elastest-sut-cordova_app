# TFG-ELASTEST-SUT-CORDOVA_APP
Aplicación móvil hecha con cordova a partir del front hecha con Angular.

Esta aplicación no es funcional, ya que necesita que en el DNS del dispositivo
exista el nombre de 'express' y coincida con la ip del servidor NodeJS donde se 
encuentra la app de la aplicación. 
Esto quiere decir que está aplicación ha sido creada únicamente para propósitos
de testing e2e. Ver detalle en la raíz del [TFG-ELASTEST][tfg-elastest].

## Objetivos
En este repositorios se encuentran los ficheros necesarios para construir 
una aplicación andorid a partir de un front web hecho con Angular.

## Componentes
Para que se pueda construir la aplicación android, es necesario la aplicación
Angular y algunos ficheros de configuración. También se encuentran ficheros
generados por Cordova.

### Aplicación Angular
En la raíz del repositorio se encuentra la aplicación Angular tal como está en el
[repositorio del front web][tfg-elastest-sut-front].

### Ficheros de configuración para Cordova
Para poder construir la aplicación Cordova, se necesita de unas dependencias y 
configuraciones extra. Estos ficheros y configuraciones son generados automáticamente
por Cordova tras crear un proyecto y añadir una plataforma, en este caso Android.

### Aplicación Android
En la carpeta `platforms/android` se encuentra el proyecto Android, que ha sido generado
automáticamente por Cordova después de ejecutar los comandos sobre el proyecto:

`ng build --prod --aot`

`cordova build android`

### APK
Es la aplicación construida a partir del proyecto Android. Originalmnte Cordova guarda
el apk generado en el directorio `.platforms/android/app/build/outputs/apk/debug`
pero se ha copiado al directorio `./apk/` para un mejor acceso por otros módulos del TFG.

## Despliegue
Al ser una aplicación con objetivos de testing, el despliegue en cualquier dispositivo
no es trivial. Como se ha comentado en la introducción, el dispositivo móvil debe de 
tener configurado en su DNS local el nombre de 'express' con la dirección ip del servidor
backend hecho con NodeJS contenido en este [repositorio][tfg-elastest-sut-back].

Se puede desplegar la apliación descargando el apk y instalandolo en un dispositivo
Android o bien mediante adb:

- Iniciamos el servidor adb y mostramos los dispositivos conectados: `adb devices`
- Instalamos el apk al dispositivo: `adb -s <dispositivo> install app-debug.apk`

[tfg-elastest]: https://github.com/DavidCorreas/tfg-elastest
[tfg-elastest-sut-front]: https://github.com/DavidCorreas/tfg-elastest-sut-front.git
[tfg-elastest-sut-back]: https://github.com/DavidCorreas/tfg-elastest-sut-back.git

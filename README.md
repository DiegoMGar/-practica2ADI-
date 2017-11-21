# lista-compra-redux

Ejemplo de la lista de la compra con Redux+React+Webpack

## Funcionalidades incluidas

Esta versión solo tiene la lista en local, es decir no accede a ningún API REST. La lista  se guarda en el *store* de redux, que se crea al cargar la página (== lista inicialmente vacía, y si se recarga la página la lista se pierde). Se hace así para evitar de momento acciones asíncronas, ya que comunicar con un API REST es asíncrono.

La parte de React accede al *store* "manualmente", o sea no usamos la librería `react-redux`. Los componentes `Container` están suscritos a los cambios de estado del *store* y/o le despachan acciones. El resto de componentes no "saben nada" de redux. 

## Instalación

Antes que nada instalar las dependencias con `npm install`

Webpack incluye un servidor de desarrollo para poder probar la web. Para arrancarlo, en una terminal, ejecutar desde el directorio del proyecto:

```bash
./node_modules/.bin/webpack-dev-server
```

No cerrar la terminal para que no se pare el servidor de desarrollo.

Para probar la aplicación, acceder a `http://localhost:8080`.

Si cambia el HTML o el JS de la web, el servidor de desarrollo hará que se recargue automáticamente la página en el navegador.




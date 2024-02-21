# CountryApp

Este proyecto es una aplicación web desarrollada en Angular que permite a los usuarios buscar países utilizando una API externa. La aplicación recibe inputs del usuario, como el nombre del país, y muestra los resultados correspondientes obtenidos de la API.

## Conocimientos Adquiridos:

* Utilizar Angular para desarrollar aplicaciones web interactivas.
* Comunicación entre componentes con los decoradores Input u Output.
* Conectar una aplicación con Angular con una API.
* Captar la información de la API tanto con Promesas como con Observables.
* Observables: 
    * Son la elección preferida en Angular para manejar solicitudes HTTP y eventos DOM debido a la estrecha integración con RxJS.
    * Reactive Extensions for JavaScript (rxjs).
* Uso de los nuevos templates de Angular 17
    * @if @else
    * @for
    * [Bucle for](https://angular.io/api/core/for)
* Uso de Servicios / Inyectables en Angular.
    * Función inject().
* Configurar y gestionar rutas primarias y anidadas con Router y routerLink
* Uso de ReactivesFormsModule de Angular

## Mejoras
- Refactorización de codigo.
- Contenido añadido a paginas de Inicio, Contacto y Acerca de.
- Mejora del Frontend de la aplicación.
- Web Responsive.
- Formulario reactivo en la pagina de Contacto.


## Angular, HttpClient y RxJS:
En Angular, el módulo HttpClientModule proporciona un servicio HttpClient que permite realizar solicitudes HTTP a servidores remotos. Este servicio devuelve Observables en lugar de promesas al realizar solicitudes HTTP.


**Importación**

```
import { HttpClient } from '@angular/common/http';
```

**Inicialización**
```
constructor (private http : HttpClient) {};
```

**Función donde usamos HttpClient**
```
getCountriesByCaptial(capital : string): Observable<Country[]> {
    const url = `${this.url}/capital/${capital}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }
```

**Configuración**
```
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
```

**Uso**
```
this.countriesService.getCountriesByCaptial(this.capital).subscribe((countriesByCapital: Country[]) => {
        this.countriesByCapital = countriesByCapital;
      });
```

**Documentación**
[HttpClient](https://angular.io/api/common/http/HttpClient)

RxJS (Reactive Extensions for JavaScript) es una biblioteca para programación reactiva en JavaScript. Angular utiliza RxJS para manejar flujos de datos asincrónicos, como los eventos DOM y las solicitudes HTTP.

RxJS proporciona una amplia gama de operadores que se pueden utilizar para transformar, filtrar, combinar y manipular Observables de manera funcional y declarativa. Esto significa que puedes encadenar operadores para realizar una variedad de tareas complejas de manera más limpia y concisa que utilizando enfoques imperativos tradicionales.

La integración de RxJS con Angular es particularmente potente en el contexto de las solicitudes HTTP y los eventos DOM. Por ejemplo, al realizar solicitudes HTTP con HttpClient, puedes utilizar operadores como map, catchError, tap, retry, entre otros, para transformar la respuesta del servidor, manejar errores, realizar acciones secundarias, reintentar solicitudes, etc.

Del mismo modo, para trabajar con eventos DOM, puedes utilizar el módulo fromEvent de RxJS para crear Observables a partir de eventos DOM como clics de ratón, cambios de valor de entrada, etc. Luego, puedes encadenar operadores para manipular y transformar estos eventos de manera reactiva.

Esta integración estrecha con RxJS permite escribir código más reactivo, mantenible y eficiente en Angular, lo que lo convierte en una herramienta poderosa para construir aplicaciones web modernas y dinámicas.


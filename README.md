# CountryApp

Este proyecto es una aplicación web desarrollada en Angular que permite a los usuarios buscar países utilizando una API externa. La aplicación recibe inputs del usuario, como el nombre del país, y muestra los resultados correspondientes obtenidos de la API.

## Inicio del proyecto:

- Se crea un nuevo proyecto Angular llamado "countryApp".
- Se agrega Bootstrap a través de su CDN para tener estilos globales en la aplicación.
- Se crean dos carpetas adicionales en el proyecto: "countries" y "shared". Dentro de "shared", se crean las carpetas "component" y "pages".
- Se generan tres componentes en la carpeta "pages": home-page, about-page y contact-page.

## Enrutamiento:

- Se configura el enrutamiento para que las URL con "/home", "/about" o "/contact" muestren los componentes correspondientes.
- Por defecto, cualquier otra URL lleva al componente "home-page".

## Barra lateral:

- Se crea el componente de barra lateral llamado "sidebar" en la carpeta "shared/component".
- Se configuran los enlaces de la barra lateral para apuntar a los componentes "home-page" y "about-page" utilizando la directiva "routerLink".

## Nuevos componentes en "countries":

- Se crean cuatro subcarpetas dentro de "countries": "components", "interfaces", "pages" y "services".
- Se generan nuevos componentes dentro de "pages": "byCapitalPage", "byCountryPage", "byRegionPage" y "countryPage".
- Se configuran las rutas relacionadas con la carpeta "countries" utilizando lazy-loading para cargar las rutas del módulo "countries.routes.ts".
- Se añaden enlaces correspondientes en el componente "sidebar" para acceder a las rutas definidas en "country.routes.ts".

## Búsqueda de países:

- Se crea el componente "searchBox" en "shared/components" para la búsqueda de países.
```
<input type="text" placeholder="Introduce el término de búsqueda..." class="form-control">
```
- El componente incluye un formulario básico para recoger el término de búsqueda.
- Se conecta este componente con el componente "byCapitalPage" para manejar la búsqueda y mostrar el término de búsqueda en la consola.

## Backend y servicio de conexión:

- Se estudia la API-Rest restcountries.com para acceder a información sobre países del mundo.
- Se define la interfaz "Country" asociada al modelo de datos y se implementa el servicio "country.service.ts" para conectarse con la API-Rest.

## Resultados por pantalla. Componente "country-table":

- Se crea el componente "country-table" en "countries/components" para presentar los resultados de búsqueda de países.
- El componente recibe los datos de países mediante un array y muestra una lista de resultados básica.
- Se conecta el componente "country-table" con el componente "byCapitalPage" para mostrar los resultados de búsqueda.
```
@if(countries.length === 0){
  <div class="alert alert-warning text-center">No hay países que mostrar... </div>
} @else {
  <div class="table table-hover">
  <thead>
    <tr>
      <th>Icono</th>
      <th>Bandera</th>
      <th>Nombre</th>
      <th>Capital</th>
      <th>Población</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    @for(country of countries; track country.cca3){
        <tr>
          <td>{{ country.altSpellings[0] }}</td>
          <td><img src="{{ country.flags.png }}" alt="{{ country.name.common }} flag"></td>
          <td>{{ country.name.common }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.population }}</td>
          <td [routerLink]="['/countries/', country.cca3]">Ver más...</td>
        </tr>
    }
  </tbody>
  </div>
}
```

## Manejo de errores de conexión a la API-Rest:

- Se implementa el manejo de errores en el formulario de búsqueda y en el resultado del observable.
- Se utiliza un .pipe() de Angular para capturar errores a nivel del servicio "country.service.ts".
```
 searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }
```

## Vista detallada de la información. Paso de parámetros por URL:

- Se implementa la vista detallada de la información de un país utilizando el enlace "Ver más" en el componente "country-table".
- Se añade un parámetro de código de país en la URL para acceder a la información detallada del país.
- Se desarrolla la lógica en el componente "country-page" para manejar los parámetros de la URL y mostrar la información detallada del país.
```
searchCountryByAlphaCode( code: string ): Observable<Country | null> {

  const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) ) // cuidado con la importación de map en `rxjs`
      );
  }
```

## Plantilla del componente de detalle y enlace:

- Se diseña la plantilla del componente "country-page" para mostrar la información detallada del país.
- Se edita el enlace "Ver más" en el componente "country-table" para enlazar con la vista detallada de cada país mediante el paso de parámetros por la URL.


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


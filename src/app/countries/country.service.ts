import { Injectable } from '@angular/core';
import { Country } from './interfaces/country';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  url = 'https://restcountries.com/v3.1/';

  constructor (private http : HttpClient) {};

  getCountries(countryName : string) : Observable<Country[]> {
    const url = `${this.url}name/${countryName}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  getCountriesByCaptial(capital : string): Observable<Country[]> {
    const url = `${this.url}capital/${encodeURIComponent(capital)}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  getCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.url }alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
    }

  getCountriesByRegion(region : string) : Observable<Country[]> {
    const url = `${this.url}region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])) // Si hay un error se vacía el array de resultados
    );
  }

}

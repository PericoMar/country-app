import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../country.service';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  placeholder : string = "Introduce el nombre del país que busca..."
  country: string = '';
  countriesByName: Country[] = [];
  isLoading : boolean = true;
  // inject crea una instancia de un servicio para poder usar sus metodos
  countriesService: CountryService = inject(CountryService);

  handleSearchTextChange(searchText: string) {
    this.country = searchText;
    if (this.country != '') {
      this.countriesService.getCountries(this.country).subscribe((countriesByName: Country[]) => {
        this.countriesByName = countriesByName;
      });
    }
  }
}

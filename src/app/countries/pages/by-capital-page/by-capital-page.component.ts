import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryService } from '../../country.service';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  placeholder : string = "Introduce la capital del país que busca..."
  capital: string = '';
  countriesByCapital: Country[] = [];
  // inject crea una instancia de un servicio para poder usar sus metodos
  countriesService: CountryService = inject(CountryService);

  handleSearchTextChange(searchText: string) {
    this.capital = searchText;
    if (this.capital != '') {
      this.countriesService.getCountriesByCaptial(this.capital).subscribe((countriesByCapital: Country[]) => {
        this.countriesByCapital = countriesByCapital;
      });
    }
  }
}

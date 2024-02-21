import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../country.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  isLoading : boolean = true;
  country : any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private countriesService: CountryService // Inyecta el servicio en el constructor
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.getCountryByAlphaCode(id))
    )
    .subscribe( country => {
      if (!country) {
        this.router.navigateByUrl('');
      } else {
        this.isLoading = false;
        this.country = country;
      }
    });
  }
}

import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByUrlComponent } from './pages/by-url/by-url.component';

export const COUNTRY_ROUTES: Routes = [
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'by-region', component: ByRegionPageComponent },
  { path: 'by-url' , component: ByUrlComponent},
  { path: ':id', component: CountryPageComponent }
];

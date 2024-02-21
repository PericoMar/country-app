import { Component, Input} from '@angular/core';
import { Country } from '../../interfaces/country';
import { NgTemplateOutlet } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [NgTemplateOutlet, RouterModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input() countries : Country[] = [];
}

import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: `.btn{
    background-color: #2badad;
    border-color: #2badad;
  }
  
  `
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Introduce el término de búsqueda...';
  @Output() newSearch: EventEmitter<string> = new EventEmitter<string>();

  onNewSearch(value: string) {
    this.newSearch.emit(value);
  }
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countryApp';

  constructor(private location : Location){}

  ngOnInit() {
    this.checkWidth(); // Verifica el tamaño de la ventana cuando se carga el componente
  }

  goBack() : void{
    this.location.back();
  }

  botonAtrasVisible = true;

  

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWidth(); // Verifica el tamaño de la ventana cuando cambia el tamaño de la ventana
  }

  checkWidth() {
    if (window) { // Verifica si window está definido
      this.botonAtrasVisible = window.innerWidth >= 1200; // Establece el estado del botonAtras basado en el ancho de la ventana
    }
  }
}

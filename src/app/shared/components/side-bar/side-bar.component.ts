import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  sidebarVisible = false;
  botonCierreSidebar = false;

  constructor() { }

  ngOnInit() {
    this.checkWidth(); // Verifica el tamaño de la ventana cuando se carga el componente
    this.sidebarVisible = true;
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWidth(); // Verifica el tamaño de la ventana cuando cambia el tamaño de la ventana
  }

  checkWidth() {
    if (window) { // Verifica si window está definido
      this.sidebarVisible = window.innerWidth >= 1200; // Establece el estado del sidebar basado en el ancho de la ventana
      this.botonCierreSidebar = false;
    }
  }

  desplegarSidebar(){
    this.sidebarVisible = true;
    this.botonCierreSidebar = true;
  }

  closeSidebar(){
    this.sidebarVisible = false;
    this.botonCierreSidebar = false;
  }
}

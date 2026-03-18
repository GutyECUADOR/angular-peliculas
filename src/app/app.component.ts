import { CurrencyPipe, DatePipe, NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculasComponent } from "./peliculas/lista-peliculas/lista-peliculas.component";

@Component({
  selector: 'app-root',
  imports: [DatePipe, ListaPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas ok';
  pelicula = {
    titulo: 'El señor de los anillos',
    director: 'Peter Jackson',
    año: 2001,
    fecha: new Date()
  }
  

  duplicarNumero(numero: number): number {
    return numero * 2;
  }

  handleClick() {
    console.log('Botón actualizado clicado');
  }
}

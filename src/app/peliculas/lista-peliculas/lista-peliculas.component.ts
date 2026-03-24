import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

export interface Pelicula {
  titulo: string;
  fechaLanzamiento: Date;
  precio: number;
  poster?: string; 
}

@Component({
  selector: 'app-lista-peliculas',
  imports: [CurrencyPipe, NgFor],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})

export class ListaPeliculasComponent {

  @Input({required: true}) peliculas: Pelicula[] = [];

 
  
  handleAddPelicula() {
    this.peliculas.push(
      {
      titulo: 'Nueva Película',
      fechaLanzamiento: new Date(),
      precio: 200.99
    }
    );
  }
}

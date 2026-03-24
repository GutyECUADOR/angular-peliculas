import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from '../../compartidos/componentes/rating/rating.component';

export interface Pelicula {
  titulo: string;
  fechaLanzamiento: Date;
  precio: number;
  poster?: string; 
  rating: number;
}

@Component({
  selector: 'app-lista-peliculas',
  imports: [CurrencyPipe, NgFor, MatButtonModule, MatIconModule, RatingComponent],
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
      precio: 200.99,
      rating: 0
    }
    );
  }
}

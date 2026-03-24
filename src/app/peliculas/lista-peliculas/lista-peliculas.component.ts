import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from '../../compartidos/componentes/rating/rating.component';
import { MatCardModule } from '@angular/material/card';

export interface Pelicula {
  titulo: string;
  fechaLanzamiento: Date;
  precio: number;
  poster?: string; 
  rating: number;
}

@Component({
  selector: 'app-lista-peliculas',
  imports: [CurrencyPipe, NgFor, MatButtonModule, MatIconModule, RatingComponent, MatCardModule],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})

export class ListaPeliculasComponent {

  @Input({required: true}) peliculas: Pelicula[] = [];
 
  handleEventRatingChange(pelicula: Pelicula, newRating: number): void {
    alert(`La película ${pelicula.titulo} ha cambiado su rating a ${newRating}`);
  }
}

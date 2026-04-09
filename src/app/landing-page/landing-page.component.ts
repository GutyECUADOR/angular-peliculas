import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListaPeliculasComponent, Pelicula } from '../peliculas/lista-peliculas/lista-peliculas.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  imports: [ListaPeliculasComponent, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
title = 'angular-peliculas ok';
  pelicula = {
    titulo: 'El señor de los anillos',
    director: 'Peter Jackson',
    año: 2001,
    fecha: new Date()
  }

  peliculasCartelera: Pelicula[] = [{
    titulo: 'Inside Out 2',
    fechaLanzamiento: new Date(),
    precio: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    rating: 4
  },
  {
    titulo: 'Moana 2',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    rating: 5
  },
  {
    titulo: 'Bad Boys: Ride or Die',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    rating: 3
  },
  {
    titulo: 'Deadpool & Wolverine',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg',
    rating: 4
  },
  {
    titulo: 'Oppenheimer',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/250px-Oppenheimer_%28film%29.jpg',
    rating: 2 

  },
  {
    titulo: 'The Flash',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/250px-The_Flash_%28film%29_poster.jpg',
    rating: 3
  }];

  peliculasEstrenos: Pelicula[] = [
  {
    titulo: 'Deadpool & Wolverine',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg',
    rating: 4
  }];

  

  duplicarNumero(numero: number): number {
    return numero * 2;
  }

  handleClick() {
    console.log('Botón actualizado clicado');
  }

  handleAddPelicula(peliculas: Pelicula[]) {
    peliculas.push(
      {
      titulo: 'Nueva Película',
      fechaLanzamiento: new Date(),
      precio: 200.99,
      rating: 0
    }
    );
  }
}

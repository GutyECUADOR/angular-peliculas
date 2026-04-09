import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './indice-generos/indice-generos.component';
import { CreateGenerosFormComponent } from './generos/create-generos-form/create-generos-form.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';
import { EditarGenerosFormComponent } from './generos/editar-generos-form/editar-generos-form.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'generos', component: IndiceGenerosComponent},
    { path: 'generos/crear', component: CreateGenerosFormComponent},
    { path: 'generos/editar/:id', component: EditarGenerosFormComponent},

    /* Películas */
    { path: 'peliculas/crear', component: CrearPeliculasComponent},
    { path: 'peliculas/editar/:id', component: EditarPeliculasComponent}
];

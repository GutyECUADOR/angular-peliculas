import { Component, inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-generos-form',
  imports: [MatButton],
  templateUrl: './create-generos-form.component.html',
  styleUrl: './create-generos-form.component.css'
})
export class CreateGenerosFormComponent {

  router = inject(Router);

  handlerCreateGenero() {
    console.log("click");
    this.router.navigate(['/generos']);
  }
}

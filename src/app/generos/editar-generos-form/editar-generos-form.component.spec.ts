import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGenerosFormComponent } from './editar-generos-form.component';

describe('EditarGenerosFormComponent', () => {
  let component: EditarGenerosFormComponent;
  let fixture: ComponentFixture<EditarGenerosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarGenerosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGenerosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

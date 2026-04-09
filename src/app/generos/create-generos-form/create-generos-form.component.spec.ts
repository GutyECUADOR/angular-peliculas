import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenerosFormComponent } from './create-generos-form.component';

describe('CreateGenerosFormComponent', () => {
  let component: CreateGenerosFormComponent;
  let fixture: ComponentFixture<CreateGenerosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGenerosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGenerosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

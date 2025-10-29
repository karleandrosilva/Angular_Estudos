import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente10 } from './componente10';

describe('Componente10', () => {
  let component: Componente10;
  let fixture: ComponentFixture<Componente10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

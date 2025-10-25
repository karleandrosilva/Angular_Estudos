import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente09 } from './componente09';

describe('Componente09', () => {
  let component: Componente09;
  let fixture: ComponentFixture<Componente09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente09]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente09);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
